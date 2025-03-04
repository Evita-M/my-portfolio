import { FC } from 'react';
import { TimelineItem, TimelineItemBase } from './item';
import { motion } from 'framer-motion';

interface TimelineProps {
  data: TimelineItemBase[];
}

export const Timeline: FC<TimelineProps> = ({ data }) => {
  return (
    <section className='relative mx-auto lg:max-w-[90%]'>
      <motion.div
        className='absolute left-1/2 -ml-[1px] hidden w-[2px] bg-slate-500 lg:block'
        initial={{ height: 0 }}
        whileInView={{ height: 'calc(100% - 60px)' }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      />
      {data.map((item, index) => (
        <TimelineItem key={item.year} {...item} index={index} />
      ))}
    </section>
  );
};
