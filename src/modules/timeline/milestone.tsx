import { FC, ReactNode } from 'react';

interface MilestoneProps {
  icon: ReactNode;
}

export const Milestone: FC<MilestoneProps> = ({ icon }) => {
  return (
    <div className='group flex flex-col items-center justify-center py-4 md:py-0'>
      <div className='relative z-10 flex h-[6rem] w-[6rem] animate-[wiggle_1s_ease-in-out_infinite] items-center justify-center rounded-full border border-slate-300 bg-slate-900 text-slate-300 transition-all duration-600 ease-in-out group-hover:scale-110 group-hover:border-fuchsia-300 group-hover:text-fuchsia-300 md:h-[6rem] md:w-[6rem]'>
        {icon}
      </div>
    </div>
  );
};
