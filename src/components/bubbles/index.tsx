import { motion } from 'framer-motion';
import { FC } from 'react';

interface BubbleProps {
  size: number;
  position: { x: number; y: number };
  delay: number;
}

const Bubble: FC<BubbleProps> = ({ size, position, delay }) => (
  <motion.div
    className='absolute rounded-full bg-fuchsia-500/10 backdrop-blur-sm'
    style={{
      width: size,
      height: size,
      left: `${position.x}%`,
      top: `${position.y}%`,
    }}
    initial={{ scale: 0, opacity: 0 }}
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.5, 0.3],
      y: [-20, 20, -20],
    }}
    transition={{
      duration: 6,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />
);

export const Bubbles: FC = () => {
  const bubbles = [
    { size: 100, position: { x: 10, y: 20 }, delay: 0 },
    { size: 150, position: { x: 80, y: 30 }, delay: 1 },
    { size: 80, position: { x: 30, y: 70 }, delay: 2 },
    { size: 120, position: { x: 70, y: 80 }, delay: 3 },
    { size: 90, position: { x: 20, y: 40 }, delay: 4 },
    { size: 130, position: { x: 90, y: 60 }, delay: 5 },
    { size: 70, position: { x: 50, y: 50 }, delay: 6 },
  ];

  return (
    <div className='fixed inset-0 -z-10 overflow-hidden'>
      {bubbles.map((bubble, index) => (
        <Bubble key={index} {...bubble} />
      ))}
    </div>
  );
};
