import type { NextApiRequest, NextApiResponse } from 'next';

// Server-side environment variables.
// Ensure TIKTOK_CLIENT_KEY and TIKTOK_CLIENT_SECRET are set in your environment.
// For local development, you can add them to a .env.local file:
// TIKTOK_CLIENT_KEY=your_actual_client_key
// TIKTOK_CLIENT_SECRET=your_actual_client_secret
const TIKTOK_CLIENT_KEY = process.env.TIKTOK_CLIENT_KEY;
const TIKTOK_CLIENT_SECRET = process.env.TIKTOK_CLIENT_SECRET;
// TODO: Ensure this matches the redirect URI configured in your TikTok app and on the auth page
const REDIRECT_URI = 'https://www.thejoydigi.com/api/tiktok/callback';

type TikTokTokenResponse = {
  access_token?: string;
  refresh_token?: string;
  error?: string;
  error_description?: string;
  open_id?: string;
  scope?: string;
  expires_in?: number;
  refresh_expires_in?: number;
  token_type?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!TIKTOK_CLIENT_KEY || !TIKTOK_CLIENT_SECRET) {
    console.error('Missing TikTok server-side environment variables: TIKTOK_CLIENT_KEY or TIKTOK_CLIENT_SECRET');
    return res.status(500).json({ message: 'Server configuration error: TikTok credentials not set.' });
  }

  const { code, state, error, error_description } = req.query;

  if (error) {
    console.error(`TikTok Authorization Error: ${error} - ${error_description}`);
    return res.status(400).json({ 
      message: `TikTok Authorization Failed: ${error_description || error}` 
    });
  }

  // Retrieve stored CSRF state - In a real app, you might store this in a session
  // For this example, we assume the auth page used localStorage and we can't directly access it here.
  // In a real scenario, the CSRF token should be passed to the server when the auth process starts,
  // stored in a user session (e.g., httpOnly cookie), and then compared here.
  // For simplicity, this example won't have robust CSRF verification on the server-side callback
  // without implementing a session mechanism. The auth page DOES create and store it in localStorage.
  // A robust solution would involve:
  // 1. Client generates CSRF, stores it in a cookie, and sends it in the state.
  // 2. Server reads cookie CSRF, compares with state CSRF.
  // Or:
  // 1. Server generates CSRF, stores in session (httpOnly cookie), sends to client to include in state.
  // 2. Client sends state (inc. CSRF) to TikTok.
  // 3. TikTok redirects back with state. Server compares state's CSRF with session CSRF.

  // const storedState = req.cookies.tiktok_csrf_state; // Example if using cookies
  // if (!state || state !== storedState) {
  //   return res.status(403).json({ message: 'CSRF token mismatch. Invalid state.' });
  // }

  if (!code) {
    return res.status(400).json({ message: 'Authorization code is missing.' });
  }

  const params = new URLSearchParams();
  params.append('client_key', TIKTOK_CLIENT_KEY);
  params.append('client_secret', TIKTOK_CLIENT_SECRET);
  params.append('code', code as string);
  params.append('grant_type', 'authorization_code');
  params.append('redirect_uri', REDIRECT_URI);

  try {
    const response = await fetch('https://open.tiktokapis.com/v2/oauth/token/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params,
    });

    const data: TikTokTokenResponse = await response.json();

    if (!response.ok || data.error) {
      console.error('TikTok Token API Error:', data);
      return res.status(response.status || 500).json({ 
        message: `Failed to obtain access token: ${data.error_description || data.error || 'Unknown error'}` 
      });
    }

    // Successfully obtained tokens
    // Redirect to a page to display tokens or handle them as needed
    // For this example, redirecting to a new page with tokens in query params
    // IMPORTANT: In production, exposing tokens in URL is not recommended.
    // They should be handled server-side or stored securely (e.g., httpOnly cookies).
    const { access_token, refresh_token } = data;
    if (access_token && refresh_token) {
      res.redirect(`/tiktok-tokens?access_token=${encodeURIComponent(access_token)}&refresh_token=${encodeURIComponent(refresh_token)}`);
    } else {
      res.status(500).json({ message: 'Access token or refresh token not found in response.' });
    }

  } catch (err: any) {
    console.error('Internal server error during token exchange:', err);
    return res.status(500).json({ message: 'Internal Server Error', details: err.message });
  }
}
