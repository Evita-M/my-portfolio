'use client';
import { FC, ReactNode, useState } from 'react';
import { IconMail } from '@tabler/icons-react';
import { BAR_ICON_SIZE } from '@/utils/variables';
import { NavLink, NavLinkProps } from '@/components/nav-link';
import { MobileMenu } from '@/components/mobile-menu';

interface HeaderProps {
  navLinks: { icon: ReactNode; label: string; href: string }[];
}

const contactLinkProps: NavLinkProps = {
  variant: 'secondary',
  link: {
    label: 'get-in-touch',
    href: 'mailto:eva.matova6@gmail.com',
    icon: (
      <IconMail
        size={BAR_ICON_SIZE}
        className='animate-swing text-fuchsia-400'
      />
    ),
  },
};

const Header: FC<HeaderProps> = ({ navLinks }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const mobileNavLinks = [
    ...navLinks.map((link) => ({ link })),
    contactLinkProps,
  ];

  return (
    <header className='sticky top-0 z-50 bg-slate-950'>
      <div className='flex h-[48px]'>
        <div className='flex w-full flex-row items-center justify-between'>
          <div className='flex w-full items-center'>
            <ul className='scrollbar-none hidden flex-1 flex-row overflow-x-auto md:flex'>
              {navLinks.map((navLink) => (
                <li key={navLink.label} className='min-w-[200px]'>
                  <NavLink link={navLink} />
                </li>
              ))}
              <span className='block xl:hidden'>
                <NavLink {...contactLinkProps} />
              </span>
            </ul>
            <div className='hidden xl:block'>
              <NavLink {...contactLinkProps} />
            </div>
          </div>
          <div className='md:hidden'>
            <MobileMenu
              isOpen={isMobileMenuOpen}
              onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              navLinks={mobileNavLinks}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
