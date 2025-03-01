import { ICON_SIZE } from '@/utils/variables';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { FC } from 'react';

interface ExpandButtonProps {
  isCollapsed: boolean;
  onClick: (isCollapsed: boolean) => void;
}

export const ExpandButton: FC<ExpandButtonProps> = ({
  isCollapsed,
  onClick,
}) => {
  return (
    <button
      onClick={() => onClick(!isCollapsed)}
      className='absolute top-[12px] right-3 z-20 flex h-[24px] w-[24px] cursor-pointer items-center justify-center text-fuchsia-400 shadow-md transition-all duration-300 hover:bg-slate-900 hover:text-fuchsia-200'
      aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
    >
      {isCollapsed ? (
        <IconChevronRight size={ICON_SIZE} />
      ) : (
        <IconChevronLeft size={ICON_SIZE} />
      )}
    </button>
  );
};
