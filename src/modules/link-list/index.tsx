import { FC } from 'react';

interface LinkItem {
  comment: string;
  variable: string;
  value: string;
}

interface LinkListProps {
  links: LinkItem[];
}

export const LinkList: FC<LinkListProps> = ({ links }) => {
  return (
    <ul className='flex flex-col gap-8'>
      {links.map((info, index) => (
        <li key={index}>
          <span className='block text-neutral-300'>// {info.comment}</span>
          <span className='flex gap-2 font-medium'>
            <p className='text-primary'>const</p>
            <p className='text-secondary'>{info.variable}</p>
            <p className='text-primary'>=</p>
            <span className='text-tertiary'>
              <a href={info.value} target='_blank' rel='noopener noreferrer'>
                "{info.value}"
              </a>
            </span>
            <span className='text-primary'>;</span>
          </span>
        </li>
      ))}
    </ul>
  );
};
