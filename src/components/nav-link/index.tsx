'use client';
import Link from 'next/link';
import React, { FC } from 'react';
import { usePathname } from 'next/navigation';
import { cva } from 'class-variance-authority';

export interface Link {
  label: string;
  href: string;
}

interface NavLinkProps {
  link: Link;
}

const navLinkStyles = cva(
  'group border-border relative flex w-[160px] items-center justify-center border-r p-4 after:absolute after:bottom-[-1px] after:left-[-1px] after:h-[2px] after:transition-all after:duration-300 after:ease-in-out',
  {
    variants: {
      active: {
        true: 'after:bg-primary after:w-[calc(100%+1px)] after:opacity-70',
        false: 'after:w-0 after:opacity-0',
      },
    },
    defaultVariants: {
      active: false,
    },
  }
);

const labelStyles = cva('tracking-wide transition-opacity duration-200', {
  variants: {
    active: {
      true: 'text-white',
      false: 'text-white opacity-70 group-hover:opacity-100',
    },
  },
  defaultVariants: {
    active: false,
  },
});

export const NavLink: FC<NavLinkProps> = ({ link }) => {
  const pathname = usePathname();
  const isActive = pathname === link.href;

  return (
    <Link href={link.href} className={navLinkStyles({ active: isActive })}>
      <span className={labelStyles({ active: isActive })}>{link.label}</span>
    </Link>
  );
};
