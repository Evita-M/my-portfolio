import { FC } from 'react';
import { IconCopyright, IconHeart } from '@tabler/icons-react';
import { BAR_ICON_SIZE, ICON_COLOR } from '@/utils/variables';

interface FooterProps {
  copyrightYear?: number;
  author?: string;
}

export const Footer: FC<FooterProps> = ({
  copyrightYear = new Date().getFullYear(),
  author = 'Eva Matova',
}) => {
  return (
    <footer className='flex h-[5.6rem] shrink-0 items-center justify-between bg-slate-950 px-8 text-sm text-slate-300'>
      <div className='flex items-center gap-2'>
        <IconCopyright size={BAR_ICON_SIZE} /> {copyrightYear} {author}. All
        rights reserved.
      </div>
      <div className='flex items-center gap-2'>
        Built from scratch with
        <IconHeart
          size={BAR_ICON_SIZE}
          className={ICON_COLOR}
          fill='currentColor'
          aria-label='love'
        />
        <span className='sr-only'>love</span>
      </div>
    </footer>
  );
};

export default Footer;
