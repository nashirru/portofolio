import { useState, useEffect } from 'react';

// High-fidelity fallback/mock presence data for Muhammad Abdun Nasir
const MOCK_LANYARD_DATA = {
  discord_status: 'online',
  discord_user: {
    username: 'nasir.dev',
    global_name: 'Muhammad Abdun Nasir',
    avatar: '7a123e456f7890abcdef1234567890ab', // Mock avatar hash
    id: '998877665544332211',
  },
  activities: [
    {
      name: 'Visual Studio Code',
      type: 0, // Playing/Coding
      details: 'Refactoring Laravel API Controllers',
      state: 'Workspace: warok-kite-marketplace',
      timestamps: {
        start: Date.now() - 5400000 // Started 1.5 hours ago
      },
      assets: {
        large_image: 'vscode',
        large_text: 'Editing App/Http/Controllers/ProductController.php',
        small_image: 'laravel',
        small_text: 'Laravel 11.x Framework'
      }
    }
  ],
  listening_to_spotify: true,
  spotify: {
    track_id: '4PTG3Z6ehGkBF3sI7Wk5n0',
    song: 'Resonance',
    artist: 'HOME',
    album: 'Odyssey',
    album_art_url: 'https://i.scdn.co/image/ab67616d0000b273dbd63df47d0e405e3230c117'
  }
};

export function useLanyard(userId) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // If no userId is specified, bypass and use mock data
    if (!userId || userId === 'MOCK' || userId === '') {
      const mockTimer = setTimeout(() => {
        setData(MOCK_LANYARD_DATA);
        setLoading(false);
      }, 500);
      return () => clearTimeout(mockTimer);
    }

    const fetchData = async () => {
      try {
        const res = await fetch(`https://api.lanyard.rest/v1/users/${userId}`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const json = await res.json();
        
        if (json.success) {
          setData(json.data);
          setError(null);
        } else {
          throw new Error(json.error?.message || 'Lanyard error');
        }
      } catch (err) {
        console.warn('Lanyard API failed, falling back to mock data:', err.message);
        setError(err.message);
        // Fall back to mock data to keep UI looking pristine
        setData(MOCK_LANYARD_DATA);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 15000); // poll every 15s

    return () => clearInterval(interval);
  }, [userId]);

  return { data, loading, error };
}
