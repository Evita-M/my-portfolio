import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';
import { Milestone } from './milestone';

export interface TimelineItemBase {
  year: string;
  title: string;
  description: string;
  icon: ReactNode;
  subtitle?: string;
  url?: string;
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
  url,
}) => (
  <motion.div
    initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.3, delay: index * 0.1 }}
    viewport={{ once: true }}
    className='group mb-8 md:mb-16'
  >
    <article className='relative flex flex-col items-center gap-6 md:flex-row md:items-start md:gap-0'>
      {index % 2 === 0 ? (
        <>
          <div className='order-2 w-full text-left md:order-1 md:w-1/2 md:pr-16 md:text-right'>
            <p className='mb-2 text-lg text-fuchsia-300 lg:text-xl'>{year}</p>
            <h2 className='mb-4 text-xl text-white md:text-2xl'>{title}</h2>
            {subtitle && (
              <a
                href={url}
                target='_blank'
                rel='noopener noreferrer'
                className='mb-2 block cursor-pointer font-medium text-fuchsia-400 transition-colors hover:text-fuchsia-200'
              >
                {subtitle}
              </a>
            )}
            <p className='pt-2 text-slate-300 lg:pt-4'>{description}</p>
          </div>
          <div className='order-1 md:order-2'>
            <Milestone icon={icon} />
          </div>
          <div className='order-3 hidden w-1/2 md:block' />
        </>
      ) : (
        <>
          <div className='hidden w-1/2 md:block' />
          <div>
            <Milestone icon={icon} />
          </div>
          <div className='w-full text-left md:w-1/2 md:pl-16'>
            <p className='mb-2 text-lg text-fuchsia-300 lg:text-xl'>{year}</p>
            <h2 className='mb-4 text-xl text-white md:text-2xl'>{title}</h2>
            {subtitle && (
              <a
                href={url}
                target='_blank'
                rel='noopener noreferrer'
                className='mb-2 block cursor-pointer font-medium text-fuchsia-400 transition-colors hover:text-fuchsia-200'
              >
                {subtitle}
              </a>
            )}
            <p className='pt-2 text-slate-300 lg:pt-4'>{description}</p>
          </div>
        </>
      )}
    </article>
  </motion.div>
);
