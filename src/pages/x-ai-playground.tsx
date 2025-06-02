import MainLayout from '../pages/_layouts'; // Adjusted import path
import React, { useState } from 'react';

function XAiPlaygroundPage() {
  const [apiKey, setApiKey] = useState('');
  const [modelName, setModelName] = useState('');
  const [systemMessage, setSystemMessage] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const [liveSearchConfig, setLiveSearchConfig] = useState(''); // New state
  const [response, setResponse] = useState<any>(null); // Store structured response
  const [error, setError] = useState<string | null>(null); // For error messages
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setResponse(null); // Clear previous response
    setError(null); // Clear previous error

    try {
      const res = await fetch('/api/x-ai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          apiKey,
          model: modelName, // Ensure field name matches backend
          systemMessage,
          userMessage,
          // Convert liveSearchConfig string to a boolean for enableLiveSearch
          // For now, consider it true if the string is not empty.
          // A more robust solution might parse it as JSON if specific structure is needed.
          enableLiveSearch: liveSearchConfig.trim() !== '',
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        // If response is not OK, backend should return { error: "message" }
        setError(data.error || `Error: ${res.status}`);
        setResponse(null);
      } else {
        // Assuming the response from /api/x-ai is the direct response from X AI
        setResponse(data);
        setError(null);
      }
    } catch (err: any) {
      console.error('Failed to fetch from /api/x-ai:', err);
      setError(err.message || 'An unexpected error occurred.');
      setResponse(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MainLayout
      title="X AI Playground"
      description="Test page for X AI API"
    >
      <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <h1>X AI API Test Page</h1>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="apiKey" style={{ display: 'block', marginBottom: '5px' }}>API Key:</label>
            <input
              type="text"
              id="apiKey"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              required
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="modelName" style={{ display: 'block', marginBottom: '5px' }}>Model Name:</label>
            <input
              type="text"
              id="modelName"
              value={modelName}
              onChange={(e) => setModelName(e.target.value)}
              required
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="systemMessage" style={{ display: 'block', marginBottom: '5px' }}>System Message:</label>
            <textarea
              id="systemMessage"
              value={systemMessage}
              onChange={(e) => setSystemMessage(e.target.value)}
              rows={4}
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="userMessage" style={{ display: 'block', marginBottom: '5px' }}>User Message:</label>
            <textarea
              id="userMessage"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              rows={6}
              required
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </div>

          {/* New Live Search Configuration Section */}
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="liveSearchConfig" style={{ display: 'block', marginBottom: '5px' }}>Live Search Configuration (JSON):</label>
            <textarea
              id="liveSearchConfig"
              value={liveSearchConfig}
              onChange={(e) => setLiveSearchConfig(e.target.value)}
              rows={5}
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', fontFamily: 'monospace' }}
              placeholder='e.g., { "param1": "value1", "param2": true }'
            />
            <small style={{ display: 'block', marginTop: '5px', color: '#555' }}>
              Enter JSON for live search parameters. Specific fields will be added if X AI documentation becomes available.
            </small>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            style={{ padding: '10px 15px', backgroundColor: isLoading ? '#ccc' : '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            {isLoading ? 'Loading...' : 'Submit'}
          </button>
        </form>

        {isLoading && <p>Loading...</p>}

        {error && (
          <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ff0000', borderRadius: '4px', backgroundColor: '#ffe5e5', color: '#ff0000' }}>
            <h2>Error:</h2>
            <pre>{error}</pre>
          </div>
        )}

        {response && (
          <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #eee', borderRadius: '4px', backgroundColor: '#f9f9f9' }}>
            <h2>Response:</h2>
            {/* Displaying the response. Assuming it's JSON.
                Adjust according to the actual structure of the X AI API response.
                For example, if the response is { choices: [{ message: { content: "..." } }] } */}
            <pre>{JSON.stringify(response, null, 2)}</pre>
          </div>
        )}
      </div>
    </MainLayout>
  );
}

export default XAiPlaygroundPage;
