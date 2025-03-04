import { useState, FC, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { ICON_COLOR, ICON_SIZE_LG } from '@/utils/variables';

export interface TechItem {
  name: string;
  icon?: ReactNode;
}

export interface TechCategoryType {
  title: string;
  items: TechItem[];
}

export interface TechCategoryProps extends TechCategoryType {
  index: number;
}

export const TechCategory: FC<TechCategoryProps> = ({
  title,
  items,
  index,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <h2 className='sr-only'>{title}</h2>
      <motion.button
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.2, delay: index * 0.1 }}
        onClick={() => setIsExpanded(!isExpanded)}
        className='text-white-400 mb-8 flex w-full cursor-pointer items-center justify-between text-left text-xl font-semibold focus:outline-none sm:text-xl md:text-3xl'
        aria-expanded={isExpanded}
      >
        {title}
        {isExpanded ? (
          <IconChevronUp size={ICON_SIZE_LG} className={ICON_COLOR} />
        ) : (
          <IconChevronDown size={ICON_SIZE_LG} className={ICON_COLOR} />
        )}
      </motion.button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isExpanded ? 'auto' : 0,
          opacity: isExpanded ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className='overflow-hidden'
      >
        <div className='grid grid-cols-1 gap-12 py-[16px] sm:grid-cols-2 md:py-[24px] lg:grid-cols-3'>
          {items.map((item) => (
            <motion.div
              key={item.name}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
              }}
              className='group relative'
              onHoverStart={() => setHoveredItem(item.name)}
              onHoverEnd={() => setHoveredItem(null)}
            >
              <motion.div
                className='flex gap-3 border border-slate-800/50 bg-slate-900/70 px-[14px] py-[12px] backdrop-blur-xs transition-all hover:border-fuchsia-300'
                animate={{
                  boxShadow:
                    hoveredItem === item.name
                      ? '0 0 20px rgba(217, 70, 239, 0.2)'
                      : '0 0 0 rgba(217, 70, 239, 0)',
                }}
                transition={{ duration: 0.1 }}
              >
                <span className='pt-1 text-fuchsia-400/70 transition-colors group-hover:text-fuchsia-400'>
                  {item.icon}
                </span>
                <h3 className='text-lg text-slate-300 transition-colors group-hover:text-white'>
                  {item.name}
                </h3>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};
