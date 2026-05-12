import React, { useEffect, useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

const Brick = ({ brick }: { brick: { delay: number; x: number; y: number; row: number; col: number }; key?: React.Key }) => {
  const { delay, x, y } = brick;

  return (
    <motion.div
      initial={{ y: -600, opacity: 0, rotate: Math.random() * 40 - 20 }}
      whileInView={{ 
        y: 0, // Fall to its style.bottom position
        opacity: 1, 
        rotate: 0,
        transition: { 
          delay: delay,
          duration: 0.9,
          type: "spring",
          stiffness: 120,
          damping: 12
        }
      }}
      viewport={{ once: true }}
      style={{ left: `${x}%`, bottom: `${y}px` }}
      className="absolute w-14 h-7 md:w-24 md:h-12 rounded-sm shadow-lg pointer-events-none z-0"
    >
      <div className="w-full h-full bg-gradient-to-br from-[#cc6633] via-[#b35a2d] to-[#80331a] border-b-2 border-r-2 border-black/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 opacity-30" style={{ transform: 'rotate(45deg) translateY(-50%)' }} />
        {/* Subtle brick details */}
        <div className="absolute top-1 left-2 w-1 h-1 bg-black/10 rounded-full opacity-50" />
      </div>
    </motion.div>
  );
};

export const FallingBricksDecoration = () => {
  const [bricks, setBricks] = useState<{ id: number; x: number; y: number; delay: number; row: number; col: number }[]>([]);

  useEffect(() => {
    const rows = 6; // More rows for a taller wall
    const cols = 12;
    const brickWidthPC = 100 / cols; // Percentage width
    const brickHeight = 35; // px
    const newBricks = [];
    
    let id = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const xOffset = (r % 2) * (brickWidthPC / 2);
        newBricks.push({
          id: id++,
          x: c * brickWidthPC + xOffset - 2,
          y: r * brickHeight, // Build upwards from 0
          row: r,
          col: c,
          delay: (r * 0.15) + (c * 0.04) + Math.random() * 0.3
        });
      }
    }
    setBricks(newBricks);
  }, []);

  return (
    <div className="absolute bottom-0 left-0 right-0 h-[300px] overflow-hidden pointer-events-none z-0">
      <div className="relative w-full h-full max-w-7xl mx-auto opacity-60">
        {bricks.map(brick => (
          <Brick key={brick.id} brick={brick} />
        ))}
      </div>
    </div>
  );
};
