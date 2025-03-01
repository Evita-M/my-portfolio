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
}

const navLinkStyles = cva(
  'group relative flex w-[200px] items-center justify-center p-4 after:absolute after:top-0 after:left-[-1px] after:h-[2px] after:transition-all after:duration-300 after:ease-in-out',
  {
    variants: {
      active: {
        true: 'after:bg-primary after:w-[calc(100%+1px)] after:opacity-70 bg-slate-900',
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
  const { icon, label, href } = link;
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={link.href} className={navLinkStyles({ active: isActive })}>
      <span
        className={`${labelStyles({ active: isActive })} flex items-center gap-3 text-base`}
      >
        {icon} {label}
      </span>
    </Link>
  );
};
