import { motion } from 'framer-motion';
import { PlayIcon, PauseIcon, Backward02Icon, Forward02Icon, GoBackward10SecIcon, GoForward10SecIcon } from 'hugeicons-react';
import { useAudio } from './AudioPlayer';

const formatTime = (time: number) => {
  if (isNaN(time)) return '00:00';
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

export const Controls = () => {
  const { isPlaying, togglePlayPause, nextSong, prevSong, forward10s, backward10s, progress, currentTime, duration } = useAudio();

  const buttonStyle = {
    width: '72px',
    height: '72px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1a1a1a',
    borderRadius: '999px',
    color: '#ffffff',
    border: 'none',
    cursor: 'pointer'
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      
      {/* Progress Bar */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '11px', marginBottom: '32px' }}>
        <div style={{ 
          width: '100%', 
          height: '12px', 
          backgroundColor: '#333',
          borderRadius: '6px',
          overflow: 'hidden'
        }}>
          <motion.div 
            style={{ 
              height: '100%', 
              backgroundColor: '#1ed760',
              borderRadius: '6px'
            }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear", duration: 0.1 }}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '18px', color: '#5b5b5b', fontWeight: 400, letterSpacing: '-1px' }}>
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Buttons */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        <button onClick={prevSong} style={buttonStyle}>
          <Backward02Icon size={24} variant="solid" />
        </button>
        <button onClick={backward10s} style={buttonStyle}>
          <GoBackward10SecIcon size={24} variant="stroke" />
        </button>
        
        <motion.button
          onClick={togglePlayPause}
          whileTap={{ scale: 0.9 }}
          animate={isPlaying ? { scale: [0.9, 1.05, 1] } : { scale: 1 }}
          transition={{ duration: 0.2 }}
          style={buttonStyle}
        >
          {isPlaying ? <PauseIcon size={32} variant="solid" /> : <PlayIcon size={32} variant="solid" />}
        </motion.button>
        
        <button onClick={forward10s} style={buttonStyle}>
          <GoForward10SecIcon size={24} variant="stroke" />
        </button>
        <button onClick={nextSong} style={buttonStyle}>
          <Forward02Icon size={24} variant="solid" />
        </button>
      </div>
    </div>
  );
};
