import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { songs } from '../data';
import type { Song } from '../data';

interface AudioContextType {
  currentSongIndex: number;
  currentSong: Song;
  isPlaying: boolean;
  progress: number;
  currentTime: number;
  duration: number;
  togglePlayPause: () => void;
  nextSong: () => void;
  prevSong: () => void;
  forward10s: () => void;
  backward10s: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

// Helper function to shuffle array
const shuffleArray = (array: Song[]) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [playlist, setPlaylist] = useState<Song[]>([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Shuffle songs on initial load
    setPlaylist(shuffleArray(songs));
  }, []);

  useEffect(() => {
    if (playlist.length === 0) return;

    audioRef.current = new Audio(playlist[currentSongIndex].audioUrl);
    
    const updateProgress = () => {
      if (audioRef.current && audioRef.current.duration) {
        setCurrentTime(audioRef.current.currentTime);
        setDuration(audioRef.current.duration);
        setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
      }
    };

    const handleEnded = () => {
      nextSong();
    };

    audioRef.current.addEventListener('timeupdate', updateProgress);
    audioRef.current.addEventListener('loadedmetadata', updateProgress);
    audioRef.current.addEventListener('ended', handleEnded);

    if (isPlaying) {
      audioRef.current.play().catch(console.error);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('timeupdate', updateProgress);
        audioRef.current.removeEventListener('loadedmetadata', updateProgress);
        audioRef.current.removeEventListener('ended', handleEnded);
        audioRef.current.pause();
      }
    };
  }, [currentSongIndex, playlist]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(console.error);
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const togglePlayPause = () => {
    setIsPlaying(prev => !prev);
  };

  const nextSong = () => {
    if (playlist.length === 0) return;
    setCurrentSongIndex(prev => (prev + 1) % playlist.length);
    setProgress(0);
    setCurrentTime(0);
  };

  const prevSong = () => {
    if (playlist.length === 0) return;
    setCurrentSongIndex(prev => (prev - 1 + playlist.length) % playlist.length);
    setProgress(0);
    setCurrentTime(0);
  };

  const forward10s = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(audioRef.current.currentTime + 10, audioRef.current.duration);
    }
  };

  const backward10s = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(audioRef.current.currentTime - 10, 0);
    }
  };

  if (playlist.length === 0) return null; // Avoid rendering until playlist is ready

  return (
    <AudioContext.Provider value={{
      currentSongIndex,
      currentSong: playlist[currentSongIndex],
      isPlaying,
      progress,
      currentTime,
      duration,
      togglePlayPause,
      nextSong,
      prevSong,
      forward10s,
      backward10s
    }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};
