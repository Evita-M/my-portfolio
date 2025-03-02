import { FC } from 'react';
import { IconCopyright, IconHeart } from '@tabler/icons-react';
import { BAR_ICON_SIZE } from '@/utils/variables';

interface FooterProps {
  copyrightYear?: number;
  author?: string;
}

export const Footer: FC<FooterProps> = ({
  copyrightYear = new Date().getFullYear(),
  author = 'Eva Matova',
}) => {
  return (
    <footer className='flex flex-col-reverse items-center justify-center gap-4 bg-slate-950 p-8 text-sm text-slate-300 md:flex-row md:justify-between'>
      <div className='flex items-center gap-2'>
        <IconCopyright size={BAR_ICON_SIZE} /> {copyrightYear} {author}. All
        rights reserved.
      </div>
      <div className='flex items-center gap-2'>
        Built from scratch with
        <IconHeart
          size={BAR_ICON_SIZE}
          fill='currentColor'
          aria-label='love'
          className='animate-swing text-fuchsia-700'
        />
        <span className='sr-only'>love</span>
      </div>
    </footer>
  );
};

export default Footer;
