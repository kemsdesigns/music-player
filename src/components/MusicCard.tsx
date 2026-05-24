import { motion, AnimatePresence } from 'framer-motion';
import { useAudio } from './AudioPlayer';
import { Controls } from './Controls';

export const MusicCard = () => {
  const { currentSong, isPlaying } = useAudio();

  const cardVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', damping: 25, stiffness: 120, duration: 0.8 }
    }
  };

  const coverVariants = {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { type: 'spring', damping: 20 } },
    exit: { x: -100, opacity: 0, transition: { duration: 0.2 } },
    playing: {
      scale: [1, 1.02, 1],
      transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
    }
  };

  const infoVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.1, duration: 0.3 } },
    exit: { y: -20, opacity: 0, transition: { duration: 0.2 } }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      style={{
        position: 'relative',
        width: '482px',
        height: '664px',
        padding: '28px',
        borderRadius: '32px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 10,
        background: 'linear-gradient(to bottom, #1f1f1f, #121212)'
      }}
    >
      
      {/* Cover Photo Area */}
      <div style={{ width: '426px', height: '342px', position: 'relative', overflow: 'hidden', borderRadius: '20px', marginBottom: '24px', flexShrink: 0 }}>
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSong.id}
            src={currentSong.coverUrl}
            alt={currentSong.title}
            initial="initial"
            animate={isPlaying ? ["animate", "playing"] : "animate"}
            exit="exit"
            variants={coverVariants}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          />
        </AnimatePresence>
      </div>

      {/* Bottom Section (Width 426) */}
      <div style={{ width: '426px', display: 'flex', flexDirection: 'column' }}>
        {/* Song Info Area */}
        <div style={{ width: '100%', marginBottom: '20px' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSong.id}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={infoVariants}
              style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
            >
              <h2 style={{ fontSize: '28px', fontWeight: 500, margin: 0, lineHeight: 1.2, color: '#ffffff', letterSpacing: '-1px' }}>{currentSong.title}</h2>
              <p style={{ fontSize: '24px', color: '#9f9f9f', margin: 0, fontWeight: 400 }}>{currentSong.artist}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <Controls />
      </div>
      
    </motion.div>
  );
};
