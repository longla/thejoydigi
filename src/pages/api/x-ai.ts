import type { NextApiRequest, NextApiResponse } from 'next';

interface XAiRequestBody {
  apiKey: string;
  model: string;
  systemMessage: string;
  userMessage: string;
  enableLiveSearch: boolean;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const {
      apiKey,
      model,
      systemMessage,
      userMessage,
      enableLiveSearch, // This will be used later if the API supports a similar feature
    }: XAiRequestBody = req.body;

    if (!apiKey || !model || !userMessage) {
      return res.status(400).json({ error: 'Missing required parameters' });
    }

    const externalApiUrl = 'https://api.x.ai/v1/chat/completions';

    // Construct the messages array for the external API
    const messages = [];
    if (systemMessage) {
      messages.push({ role: 'system', content: systemMessage });
    }
    messages.push({ role: 'user', content: userMessage });

    const response = await fetch(externalApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages,
        // stream: false, // Assuming we want a non-streaming response for now
        // liveSearch: enableLiveSearch, // Assuming the external API might have a similar parameter
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`External API Error: ${response.status} ${errorBody}`);
      return res.status(response.status).json({ error: `External API returned an error: ${errorBody}` });
    }

    const data = await response.json();
    return res.status(200).json(data);

  } catch (error: any) {
    console.error('Error in x-ai handler:', error);
    return res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
}
