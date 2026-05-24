export const SPOTIFY_CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
export const REDIRECT_URI = 'http://localhost:5173';
export const SCOPES = ['streaming', 'user-read-email', 'user-read-private', 'user-modify-playback-state'];

export const loginWithSpotify = () => {
  const authUrl = new URL('https://accounts.spotify.com/authorize');
  authUrl.searchParams.append('client_id', SPOTIFY_CLIENT_ID);
  authUrl.searchParams.append('response_type', 'token');
  authUrl.searchParams.append('redirect_uri', REDIRECT_URI);
  authUrl.searchParams.append('scope', SCOPES.join(' '));
  authUrl.searchParams.append('show_dialog', 'true');
  
  window.location.href = authUrl.toString();
};

export const getAccessTokenFromUrl = (): string | null => {
  if (!window.location.hash) return null;
  const hashParams = new URLSearchParams(window.location.hash.substring(1));
  return hashParams.get('access_token');
};

export const searchTrackUri = async (title: string, artist: string, token: string): Promise<string | null> => {
  const query = encodeURIComponent(`track:${title} artist:${artist}`);
  const res = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=track&limit=1`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!res.ok) return null;
  const data = await res.json();
  if (data.tracks && data.tracks.items && data.tracks.items.length > 0) {
    return data.tracks.items[0].uri;
  }
  return null;
};
