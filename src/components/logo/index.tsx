import { routes } from '@/routes';
import Link from 'next/link';
import React, { FC } from 'react';

interface LogoProps {
  isCollapsed: boolean;
}

export const Logo: FC<LogoProps> = ({ isCollapsed }) => {
  return (
    <span className='px-8 py-4'>
      <Link
        href={routes.home}
        aria-label='Navigate to homepage'
        className='transition-color w-auto text-lg font-bold tracking-widest whitespace-nowrap text-fuchsia-400 uppercase duration-300 hover:text-fuchsia-200'
      >
        {isCollapsed ? 'EM' : 'eva-matova'}
      </Link>
    </span>
  );
};
