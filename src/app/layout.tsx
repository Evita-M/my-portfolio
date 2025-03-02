import { Metadata } from 'next';
import './globals.css';
import { ReactNode } from 'react';
import { barlow, inconsolata } from '@/styles/fonts';
import { PageContainer } from '@/layout/page-container';
import { Sidebar } from '@/layout/sidebar';
import {
  IconBraces,
  IconBrandReact,
  IconInfoCircle,
  IconMenu4,
} from '@tabler/icons-react';
import { BAR_ICON_SIZE } from '@/utils/variables';
import Header from '@/layout/header';
import Footer from '@/layout/footer';
import { routes } from '@/routes';

export const metadata: Metadata = {
  title: {
    default: 'Hello | Eva Matova',
    template: '%s | Eva Matova',
  },
  description: 'Frontend Developer & UX/UI Enthuasiast',
  keywords: [
    'Frontend Developer',
    'UX/UI Designer',
    'React',
    'Next.js',
    'TypeScript',
  ],
  icons: {
    icon: '/favicon/favicon-32x32.png',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Eva Matova',
  },
};

const TSX_ICON = (
  <IconBrandReact
    className='text-blue-400'
    size={BAR_ICON_SIZE}
    aria-label='TypeScript React file'
  />
);

const JSON_ICON = (
  <IconBraces
    className='text-yellow-300'
    size={BAR_ICON_SIZE}
    aria-label='JSON file'
  />
);

const MD_ICON = (
  <IconInfoCircle
    className='text-blue-400'
    size={BAR_ICON_SIZE}
    aria-label='Markdown file'
  />
);

const CSS_ICON = (
  <IconMenu4
    className='text-slate-100'
    size={BAR_ICON_SIZE}
    aria-label='Tech stack icon'
  />
);

const navLinks = [
  {
    icon: TSX_ICON,
    label: 'hello.tsx',
    href: routes.home,
  },
  { icon: JSON_ICON, label: 'about-me.json', href: routes.aboutMe },
  { icon: CSS_ICON, label: 'tech-stack.css', href: routes.techStack },
  { icon: MD_ICON, label: 'README.md', href: routes.readMe },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang='en'
      className='scroll-smooth antialiased'
      suppressHydrationWarning
    >
      <body
        className={`${inconsolata.variable} ${barlow.variable} flex min-h-[100vh] flex-col overflow-hidden bg-slate-950`}
      >
        <div className='flex flex-1 overflow-hidden'>
          <div className='hidden md:block'>
            <Sidebar navLinks={navLinks} />
          </div>
          <div className='flex flex-1 flex-col overflow-hidden'>
            <Header navLinks={navLinks} />
            <PageContainer>{children}</PageContainer>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
