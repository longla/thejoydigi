import Head from 'next/head';
import React, { useEffect, useState } from 'react';

interface Video {
  id: string;
  videoUrl: string;
  title?: string;
}

const TikTokContentPage: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showSuccessDialog, setShowSuccessDialog] = useState<boolean>(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);

  const handleShareClick = (video: Video) => {
    setSelectedVideoUrl(video.videoUrl);
    setShowSuccessDialog(true);
    // No actual sharing, just showing the dialog.
  };

  const closeDialog = () => {
    setShowSuccessDialog(false);
    setSelectedVideoUrl(null);
  };

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      setError(null);
      try {
        // The JSON file will be in public/data/tiktok-videos.json
        // Fetch relative to the public directory
        const response = await fetch('/data/tiktok-videos.json');
        if (!response.ok) {
          throw new Error(`Failed to fetch videos: ${response.status} ${response.statusText}`);
        }
        const data: Video[] = await response.json();
        setVideos(data);
      } catch (err: any) {
        setError(err.message);
        setVideos([]); // Clear videos on error
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  return (
    <>
      <Head>
        <title>TikTok Demo Content</title>
        <meta name="description" content="Demo content for TikTok app review. This page displays sample videos that can be shared to TikTok." />
      </Head>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
        <header style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h1>TikTok Demo Videos</h1>
          <p>Browse the sample videos below. You will be able to share them to TikTok.</p>
        </header>

        {loading && (
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <p>Loading videos...</p>
          </div>
        )}

        {error && (
          <div style={{ textAlign: 'center', padding: '20px', color: 'red', border: '1px solid red', borderRadius: '5px' }}>
            <h2>Error</h2>
            <p>Error loading videos: {error}</p>
            <p>Please ensure <code>public/data/tiktok-videos.json</code> exists and is correctly formatted.</p>
          </div>
        )}

        {!loading && !error && videos.length === 0 && (
          <div style={{ textAlign: 'center', padding: '20px', border: '1px solid #eee', borderRadius: '5px' }}>
            <p>No videos found. Please make sure <code>public/data/tiktok-videos.json</code> contains video data.</p>
          </div>
        )}

        {!loading && !error && videos.length > 0 && (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {videos.map((video) => (
              <li
                key={video.id}
                style={{
                  marginBottom: '25px',
                  border: '1px solid #ddd',
                  padding: '15px',
                  borderRadius: '8px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  backgroundColor: '#fff'
                }}
              >
                <h3 style={{ marginTop: 0, color: '#333' }}>{video.title || 'TikTok Video'}</h3>
                <p style={{ color: '#555' }}>
                  <strong>URL:</strong>
                  <a
                    href={video.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#0070f3', textDecoration: 'none' }}
                  >
                    {' '}{video.videoUrl}
                  </a>
                </p>
                <button
                  onClick={() => handleShareClick(video)}
                  style={{
                    padding: '10px 15px',
                    cursor: 'pointer',
                    backgroundColor: '#fe2c55', // TikTok's brand color (approximate)
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    transition: 'background-color 0.2s ease'
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#e02146')}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#fe2c55')}
                >
                  Share to TikTok
                </button>
              </li>
            ))}
          </ul>
        )}

        {showSuccessDialog && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)', // Darker backdrop
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1050, // Higher z-index
            backdropFilter: 'blur(3px)', // Optional: blur background
          }}>
            <div style={{
              backgroundColor: 'white',
              padding: '30px 40px', // More padding
              borderRadius: '12px', // More rounded corners
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)', // Enhanced shadow
              textAlign: 'center',
              minWidth: '320px', // Slightly wider
              maxWidth: '450px', // Max width
            }}>
              <h2 style={{ marginBottom: '20px', fontSize: '1.75em', color: '#333' }}>Action Confirmed!</h2>
              <p style={{ marginBottom: '30px', fontSize: '1.1em', color: '#555' }}>
                This confirms the "Share to TikTok" action was triggered for the video.
                {selectedVideoUrl &&
                  <span style={{ display: 'block', marginTop: '10px', fontSize: '0.9em', color: '#777' }}>
                    Video URL: {selectedVideoUrl}
                  </span>
                }
                <br />
                <em>(This is a demo and no actual sharing has occurred.)</em>
              </p>
              <button
                onClick={closeDialog}
                style={{
                  padding: '12px 25px',
                  fontSize: '1.1em',
                  cursor: 'pointer',
                  backgroundColor: '#007bff', // Standard blue
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  fontWeight: '600',
                  transition: 'background-color 0.2s ease',
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TikTokContentPage;
