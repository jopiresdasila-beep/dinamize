import React from 'react';
import { motion } from 'motion/react';

export const LeftSectionBricks = () => {
  const rows = 15;
  const cols = 5;
  const bricks = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const xOffset = (r % 2) * 20; 
      bricks.push({
        id: `left-${r}-${c}`,
        x: c * 60 + xOffset,
        y: r * 35,
        delay: Math.random() * 2,
        opacity: 0.15 + (Math.random() * 0.1),
        isAccent: Math.random() > 0.94
      });
    }
  }

  return (
    <div className="absolute left-0 top-0 h-full w-[40%] overflow-hidden pointer-events-none z-0 select-none">
      {/* Masking gradient to fade toward center */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#021c91]/80 to-[#021c91] z-10" />
      
      <div className="relative w-full h-full opacity-30">
        {bricks.map((brick) => (
          <motion.div
            key={brick.id}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, brick.opacity, brick.opacity] 
            }}
            transition={{
              duration: 2,
              delay: brick.delay,
              ease: "easeOut"
            }}
            style={{
              left: `${brick.x}px`,
              top: `${brick.y}px`,
              width: '55px',
              height: '28px',
            }}
            className={`absolute border-[0.3px] ${
              brick.isAccent 
                ? 'border-brand/40 bg-brand/[0.02] shadow-[0_0_10px_rgba(59,130,246,0.05)]' 
                : 'border-slate-400/20'
            } rounded-[1px]`}
          >
            {/* Architectural Blueprint Dot */}
            <div className={`absolute top-0 left-0 w-[2px] h-[2px] rounded-full ${brick.isAccent ? 'bg-brand/30' : 'bg-slate-300'} -translate-x-[1px] -translate-y-[1px]`} />
            
            {/* Subtle internal cross or secondary line */}
            {brick.isAccent && (
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <div className="w-[60%] h-[0.2px] bg-brand" />
              </div>
            )}
          </motion.div>
        ))}

        {/* Vertical Blueprint Line */}
        <div className="absolute left-10 top-0 w-[0.5px] h-full bg-gradient-to-b from-transparent via-blue-400/20 to-transparent" />
      </div>
    </div>
  );
};
