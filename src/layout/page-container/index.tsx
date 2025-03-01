'use client';
import { FC, ReactNode } from 'react';
interface PageContainerProps {
  children: ReactNode;
}

export const PageContainer: FC<PageContainerProps> = ({ children }) => {
  return (
    <>
      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.25;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.35;
          }
          20% {
            transform: scale(0.8);
            opacity: 0.4;
          }
        }
        .blob1 {
          animation: pulse 5s ease-in-out infinite;
        }
        .blob2 {
          animation: pulse 18s ease-in-out infinite;
        }
      `}</style>
      <main className='to-black-700/80 relative flex h-full w-full flex-1 flex-col overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900/95'>
        <div className='absolute inset-0 overflow-hidden'>
          <div className='blob1 absolute top-64 -right-64 h-[40rem] w-[40rem] rounded-full bg-fuchsia-500/20 blur-3xl'></div>
          <div className='blob2 absolute -bottom-64 left-64 h-[40rem] w-[40rem] rounded-full bg-blue-500/20 blur-3xl'></div>
        </div>
        <div className='custom-scrollbar relative h-full w-full overflow-x-hidden overflow-y-auto px-8 py-6'>
          {children}
        </div>
      </main>
    </>
  );
};
