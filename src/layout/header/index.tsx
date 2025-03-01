import { FC, ReactNode } from 'react';
import { IconMail } from '@tabler/icons-react';
import { BAR_ICON_SIZE, ICON_COLOR } from '@/utils/variables';
import { NavLink } from '@/components/nav-link';

interface HeaderProps {
  navLinks: { icon: ReactNode; label: string; href: string }[];
}

const Header: FC<HeaderProps> = ({ navLinks }) => {
  return (
    <div className='flex'>
      <div className='flex w-full flex-row items-center justify-between'>
        <ul className='flex flex-row'>
          {navLinks.map((navLink) => (
            <li key={navLink.label} className='w-[200px]'>
              <NavLink link={navLink} />
            </li>
          ))}
        </ul>
        <div className='w-[160]'>
          <NavLink
            link={{
              icon: <IconMail size={BAR_ICON_SIZE} className={ICON_COLOR} />,
              label: 'get-in-touch',
              href: 'mailto:eva.matova6@gmail.com',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
