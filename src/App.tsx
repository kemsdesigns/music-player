import { AudioProvider } from './components/AudioPlayer';
import { BackgroundNoise } from './components/BackgroundNoise';
import { MusicCard } from './components/MusicCard';
import { SpotifyIcon } from 'hugeicons-react';

function App() {
  return (
    <AudioProvider>
      <div style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        padding: '40px 0',
        zIndex: 0
      }}>
        <BackgroundNoise />
        
        {/* Top Logo */}
        <div style={{ zIndex: 10 }}>
          <SpotifyIcon size={42} color="#ffffff" />
        </div>

        <MusicCard />

        {/* Bottom Text */}
        <div style={{ zIndex: 10, color: 'var(--text-secondary)', fontSize: '18px', fontWeight: 500 }}>
          @kemsdesigns
        </div>
      </div>
    </AudioProvider>
  );
}

export default App;
