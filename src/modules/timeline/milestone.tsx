import { FC, ReactNode } from 'react';

interface MilestoneProps {
  icon: ReactNode;
}

export const Milestone: FC<MilestoneProps> = ({ icon }) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='bg-default flex h-[60px] w-[60px] translate-x-[2px] animate-[wiggle_1s_ease-in-out_infinite] items-center justify-center rounded-full border border-slate-300 text-slate-300'>
        {icon}
      </div>
    </div>
  );
};
