import { FC } from 'react';
import { TimelineItem, TimelineItemBase } from './item';

interface TimelineProps {
  data: TimelineItemBase[];
}

export const Timeline: FC<TimelineProps> = ({ data }) => {
  return (
    <section className='mx-auto max-w-[90%]'>
      {data.map((item, index) => (
        <TimelineItem key={item.year} {...item} index={index} />
      ))}
    </section>
  );
};
