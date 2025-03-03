import { FC } from 'react';

interface GradientTitleProps {
  text: string;
}

export const GradientTitle: FC<GradientTitleProps> = ({ text }) => {
  return (
    <h1 className='font-barlow bg-gradient-to-r from-fuchsia-400 to-purple-500 bg-clip-text text-4xl font-medium text-transparent uppercase sm:text-6xl md:text-7xl lg:text-8xl'>
      {text}
    </h1>
  );
};
