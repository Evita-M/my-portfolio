import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  align = 'left',
}) => {
  return (
    <div
      className={`mb-8 py-4 md:mb-16 md:py-8 ${
        align === 'center' ? 'text-center' : 'text-left'
      }`}
    >
      <h1 className='text-4xl font-bold tracking-widest text-fuchsia-700 uppercase md:text-7xl lg:text-8xl'>
        {title}
      </h1>
      {subtitle && (
        <p className='text-slate border-primary relative z-10 mt-4 border-l-2 bg-gradient-to-r pl-4 text-base font-light tracking-wider md:mt-6 md:pl-10 md:text-xl'>
          {subtitle}
        </p>
      )}
    </div>
  );
};
