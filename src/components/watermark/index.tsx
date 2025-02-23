'use client';

import { FC } from 'react';

interface WatermarkProps {
  text?: string;
  opacity?: number;
}

export const Watermark: FC<WatermarkProps> = ({
  text = 'WATERMARK',
  opacity = 0.07,
}) => {
  return (
    <div className='pointer-events-none absolute inset-0 overflow-hidden'>
      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='w-full max-w-[90%] px-4'>
          <div className='block flex w-full flex-col gap-4 text-center text-[8vw] font-extralight tracking-[0.2em] uppercase select-none'>
            {text.split(' ').map((word, wordIndex) => (
              <div key={wordIndex}>
                {word.split('').map((char, i) => (
                  <span
                    key={i}
                    style={{
                      color: `rgb(244 114 182 / ${opacity})`,
                      animation: `wave 4s ease-in-out ${i * 0.15}s infinite`,
                      display: 'inline-block',
                      transformOrigin: 'center bottom',
                    }}
                  >
                    {char}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes wave {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-2deg);
          }
          75% {
            transform: rotate(2deg);
          }
        }
      `}</style>
    </div>
  );
};
