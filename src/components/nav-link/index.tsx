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

export interface NavLinkProps {
  link: Link;
  align?: 'center' | 'left';
  size?: 'default' | 'lg';
  isCollapsed?: boolean;
  hasLine?: boolean;
  onClick?: VoidFunction;
  variant?: 'primary' | 'secondary';
}

const navLinkStyles = cva(
  'group relative flex w-full items-center px-8 py-5 ',
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
        true: '',
        false: '',
      },
      isCollapsed: {
        true: 'w-0 opacity-0',
        false: 'w-auto opacity-100',
      },
      size: {
        default: 'text-base',
        lg: 'text-xl',
      },
      variant: {
        primary: '',
        secondary: '',
      },
    },
    compoundVariants: [
      {
        variant: 'primary',
        active: true,
        className: 'text-white',
      },
      {
        variant: 'primary',
        active: false,
        className: 'text-slate-500 group-hover:text-slate-300',
      },
      {
        variant: 'secondary',
        active: true,
        className: 'text-fuchsia-200',
      },
      {
        variant: 'secondary',
        active: false,
        className: 'text-fuchsia-400 group-hover:text-fuchsia-200',
      },
    ],
    defaultVariants: {
      active: false,
      isCollapsed: false,
      size: 'default',
      variant: 'primary',
    },
  }
);

export const NavLink: FC<NavLinkProps> = ({
  link,
  align,
  hasLine,
  isCollapsed,
  size,
  onClick,
  variant,
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
      onClick={onClick}
    >
      <span className='flex items-center gap-3'>
        {icon}
        {!isCollapsed && (
          <span className={labelStyles({ active: isActive, size, variant })}>
            {label}
          </span>
        )}
      </span>
    </Link>
  );
};
