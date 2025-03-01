'use client';
import Link from 'next/link';
import React, { FC, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { cva } from 'class-variance-authority';

export interface Link {
  icon: ReactNode;
  label: string;
  href: string;
}

interface NavLinkProps {
  link: Link;
  align?: 'center' | 'left';
  isCollapsed?: boolean;
  hasLine?: boolean;
}

const navLinkStyles = cva(
  'group relative flex w-full items-center px-8 py-4 ',
  {
    variants: {
      active: {
        true: 'bg-slate-900',
        false: '',
      },
      align: {
        center: 'justify-center',
        left: '',
      },
      hasLine: {
        true: 'after:absolute after:top-0 after:left-[-1px] after:h-[2px] after:transition-all after:duration-300 after:ease-in-out',
        false: '',
      },
      isCollapsed: {
        true: 'justify-center',
        false: '',
      },
    },
    compoundVariants: [
      {
        hasLine: true,
        active: true,
        className: 'after:bg-primary after:w-[calc(100%+1px)] after:opacity-70',
      },
      {
        hasLine: true,
        active: false,
        className: 'after:w-0 after:opacity-0',
      },
    ],
    defaultVariants: {
      active: false,
      align: 'center',
      hasLine: true,
      isCollapsed: false,
    },
  }
);

const labelStyles = cva(
  'tracking-wide whitespace-nowrap overflow-hidden transition-all duration-300',
  {
    variants: {
      active: {
        true: 'text-white',
        false: 'text-slate-500 group-hover:text-slate-300',
      },
      isCollapsed: {
        true: 'w-0 opacity-0',
        false: 'w-auto opacity-100',
      },
    },
    defaultVariants: {
      active: false,
      isCollapsed: false,
    },
  }
);

export const NavLink: FC<NavLinkProps> = ({
  link,
  align,
  hasLine,
  isCollapsed,
}) => {
  const { icon, label, href } = link;
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={link.href}
      className={navLinkStyles({
        active: isActive,
        align,
        hasLine,
        isCollapsed,
      })}
    >
      <span className='flex items-center gap-3'>
        {icon}
        {!isCollapsed && (
          <span className={labelStyles({ active: isActive })}>{label}</span>
        )}
      </span>
    </Link>
  );
};
