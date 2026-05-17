import React from 'react';
import { motion } from 'motion/react';

export const ArchitecturalBricks = () => {
  const rows = 16;
  const cols = 12;
  const bricks = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const xOffset = (r % 2) * 6; 
      bricks.push({
        id: `${r}-${c}`,
        x: c * 12 + xOffset - 10,
        y: r * 6,
        delay: Math.random() * 3,
        duration: 3 + Math.random() * 4,
        accent: Math.random() > 0.96 
      });
    }
  }

  return (
    <div 
      className="absolute inset-y-0 left-0 w-full overflow-hidden pointer-events-none z-30 opacity-70"
      style={{ maskImage: 'linear-gradient(to right, black 20%, transparent 60%)', WebkitMaskImage: 'linear-gradient(to right, black 20%, transparent 60%)' }}
    >
      <div className="relative w-full h-full">
        {/* Subtle Cinematic Light Gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 via-transparent to-white/5 pointer-events-none" />
        
        {bricks.map((brick) => (
          <motion.div
            key={brick.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, brick.accent ? 0.4 : 0.15, 0] }}
            transition={{
              duration: brick.duration,
              repeat: Infinity,
              delay: brick.delay,
              ease: "easeInOut"
            }}
            style={{
              left: `${brick.x}%`,
              top: `${brick.y}%`,
              width: '120px',
              height: '40px',
            }}
            className={`absolute border-[0.5px] ${
              brick.accent 
                ? 'border-yellow-400/30 bg-yellow-400/5 shadow-[0_4px_12px_rgba(250,204,21,0.08)]' 
                : 'border-white/5 bg-slate-900/5 shadow-[0_2px_8px_rgba(0,0,0,0.1)]'
            } rounded-[2px]`}
          >
            {/* Minimal Geometric Brick Lines */}
            <div className="absolute bottom-1 right-2 w-1/4 h-[0.5px] bg-white/10" />
            <div className="absolute top-1 left-2 w-[0.5px] h-1/4 bg-white/10" />
            
            {brick.accent && (
              <div className="absolute top-2 right-2 w-1 h-1 rounded-full bg-yellow-400/40 blur-[1px] animate-pulse" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
