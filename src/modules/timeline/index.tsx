import { FC } from 'react';
import { TimelineItem, TimelineItemBase } from './item';

interface TimelineProps {
  data: TimelineItemBase[];
}

export const Timeline: FC<TimelineProps> = ({ data }) => {
  return (
    <section className='relative mx-auto lg:max-w-[90%]'>
      <div className='absolute left-1/2 -ml-[1px] hidden h-[calc(100%-60px)] w-[2px] bg-slate-500 lg:block' />
      {data.map((item, index) => (
        <TimelineItem
          key={item.year}
          {...item}
          index={index}
          isLast={index === data.length - 1}
        />
      ))}
    </section>
  );
};
