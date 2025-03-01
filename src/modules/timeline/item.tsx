import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';
import { Milestone } from './milestone';

export interface TimelineItemBase {
  year: string;
  title: string;
  description: string;
  icon: ReactNode;
  subtitle?: string;
}

interface TimelineItemProps extends TimelineItemBase {
  index: number;
}

export const TimelineItem: FC<TimelineItemProps> = ({
  year,
  title,
  description,
  subtitle,
  icon,
  index,
}) => (
  <motion.div
    initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.3, delay: index * 0.1 }}
    viewport={{ once: true }}
  >
    <article className='flex flex-col items-start gap-3 md:flex-row'>
      {index % 2 === 0 ? (
        <>
          <div className='mb-6 w-1/2 pr-16 text-right'>
            <p className='text-primary mb-2 text-xl'>{year}</p>
            <h2 className='mb-4 text-2xl text-white'>{title}</h2>
            {subtitle && (
              <p className='t mb-2 font-medium text-fuchsia-300'>{subtitle}</p>
            )}
            <p className='text-left text-slate-300'>{description}</p>
          </div>
          <Milestone icon={icon} />
          <div className='w-1/2' />
        </>
      ) : (
        <>
          <div className='w-1/2' />
          <Milestone icon={icon} />
          <div className='mb-6 w-1/2 pl-16 text-left'>
            <p className='text-primary mb-2 text-xl'>{year}</p>
            <h2 className='mb-4 text-2xl text-white'>{title}</h2>
            {subtitle && (
              <p className='mb-2 font-medium text-fuchsia-300'>{subtitle}</p>
            )}
            <p className='text-slate-300'>{description}</p>
          </div>
        </>
      )}
    </article>
  </motion.div>
);
