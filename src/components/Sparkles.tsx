import { motion } from 'framer-motion';
import { SparklesIcon } from 'hugeicons-react';

interface SparklesProps {
  isPlaying: boolean;
}

export const Sparkles = ({ isPlaying }: SparklesProps) => {
  const sparkleVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: (custom: number) => ({
      scale: 1,
      opacity: 0.8,
      transition: {
        delay: custom * 0.2 + 0.5,
        type: 'spring',
        stiffness: 260,
        damping: 20
      }
    }),
    idle: {
      scale: [1, 1.2, 1],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  };

  const positions = [
    { top: '-20px', left: '-20px', size: 24, rotation: -15 },
    { top: '40%', right: '-30px', size: 32, rotation: 10 },
    { bottom: '-10px', left: '20%', size: 20, rotation: 5 },
  ];

  return (
    <>
      {positions.map((pos, i) => (
        <motion.div
          key={i}
          custom={i}
          initial="initial"
          animate={isPlaying ? "idle" : "animate"}
          variants={sparkleVariants}
          style={{
            position: 'absolute',
            top: pos.top,
            left: pos.left,
            right: pos.right,
            bottom: pos.bottom,
            color: 'var(--accent)',
            zIndex: 10,
            transform: `rotate(${pos.rotation}deg)`
          }}
        >
          <SparklesIcon size={pos.size} variant="solid" />
        </motion.div>
      ))}
    </>
  );
};
