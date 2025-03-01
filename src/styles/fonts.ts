import { Barlow, Inconsolata } from 'next/font/google';

export const barlow = Barlow({
  variable: '--font-barlow-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
});

export const inconsolata = Inconsolata({
  variable: '--font-inconsolata',
  subsets: ['latin'],
});
