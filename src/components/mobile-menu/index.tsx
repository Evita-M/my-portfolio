'use client';
import { FC } from 'react';
import { IconMenu3, IconX } from '@tabler/icons-react';
import { NavLinkProps } from '@/components/nav-link';
import { NavLink } from '@/components/nav-link';
import { motion, AnimatePresence } from 'framer-motion';
import { ICON_SIZE_LG } from '@/utils/variables';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: VoidFunction;
  navLinks: NavLinkProps[];
}

export const MobileMenu: FC<MobileMenuProps> = ({
  isOpen,
  onToggle,
  navLinks,
}) => {
  return (
    <div className='relative'>
      <button
        onClick={onToggle}
        className='p-2 text-fuchsia-400 transition-colors duration-300 hover:text-fuchsia-200 md:hidden'
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? (
          <IconX size={ICON_SIZE_LG} />
        ) : (
          <IconMenu3 size={ICON_SIZE_LG} />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ type: 'tween', duration: 0.2 }}
            className='fixed inset-0 top-[40px] w-full bg-slate-950 py-8 shadow-lg md:hidden'
          >
            <nav className='h-full w-full'>
              <ul className='flex h-full w-full flex-col items-center justify-center overflow-y-auto py-4'>
                {navLinks.map(({ link, variant }) => (
                  <li key={link.href} className='w-full py-2'>
                    <NavLink
                      link={link}
                      align='center'
                      size='lg'
                      hasLine={false}
                      onClick={onToggle}
                      variant={variant}
                    />
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
