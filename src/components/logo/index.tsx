import Link from 'next/link';
import React, { FC } from 'react';

export const Logo: FC = () => {
  return (
    <Link href='/' aria-label='Navigate to homepage'>
      <span className='text-lg font-bold tracking-widest text-fuchsia-800 uppercase'>
        eva-matova
      </span>
    </Link>
  );
};
