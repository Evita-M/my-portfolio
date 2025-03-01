import { FC } from 'react';

interface LinkVariable {
  name: string;
  value: string;
}

interface LinkItem {
  comment: string;
  variables: LinkVariable[];
}

interface LinkListProps {
  hiddenTitle: string;
  links: LinkItem[];
}

export const LinkList: FC<LinkListProps> = ({ hiddenTitle, links }) => {
  return (
    <>
      <h2 className='sr-only'>{hiddenTitle}</h2>
      <ul className='flex flex-col gap-8'>
        {links.map((info, index) => (
          <li key={index}>
            <span className='block text-neutral-300'>// {info.comment}</span>
            {info.variables.map(({ name, value }, vIndex) => (
              <span key={vIndex} className='flex gap-2 text-lg font-medium'>
                <p className='text-primary'>const</p>
                <p className='text-secondary'>{name}</p>
                <p className='text-primary'>=</p>
                <span className='text-tertiary'>
                  <a href={value} target='_blank' rel='noopener noreferrer'>
                    "{value}"
                  </a>
                </span>
                <span className='text-primary'>;</span>
              </span>
            ))}
          </li>
        ))}
      </ul>
    </>
  );
};
