'use client';
import { FC, useState } from 'react';
import {
  Link as NavLink,
  NavLink as NavLinkComponent,
} from '@/components/nav-link';
import { Logo } from '@/components/logo';

import { ExpandButton } from '@/components/expand-button';

interface SidebarProps {
  navLinks: NavLink[];
}

export const Sidebar: FC<SidebarProps> = ({ navLinks }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={`relative flex h-full flex-shrink-0 flex-col transition-all duration-300 ${
        isCollapsed ? 'w-[80px]' : 'w-[240px]'
      }`}
    >
      <Logo isCollapsed={isCollapsed} />
      <ExpandButton
        isCollapsed={isCollapsed}
        onClick={() => setIsCollapsed(!isCollapsed)}
      />
      <nav className='flex-1'>
        <ul>
          {navLinks.map((navLink) => (
            <li key={navLink.href}>
              <NavLinkComponent
                isCollapsed={isCollapsed}
                align='left'
                hasLine={false}
                link={{
                  ...navLink,
                }}
              />
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
