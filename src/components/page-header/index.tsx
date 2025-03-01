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
      className={`mb-16 py-8 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      <h1 className='text-8xl font-bold tracking-widest text-fuchsia-800 uppercase'>
        {title}
      </h1>
      {subtitle && (
        <p className='text-slate- border-primary relative z-10 mt-6 border-l-2 bg-gradient-to-r pl-10 text-xl font-light tracking-wider'>
          {subtitle}
        </p>
      )}
    </div>
  );
};
