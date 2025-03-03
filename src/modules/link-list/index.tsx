import { FC } from 'react';

interface LinkVariable {
  name: string;
  value: string;
  variant?: 'email';
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
            <span className='block text-sm text-neutral-300 sm:text-base'>{`// ${info.comment}`}</span>
            {info.variables.map(({ name, value, variant }, vIndex) => (
              <span
                key={vIndex}
                className='flex flex-wrap gap-2 text-base font-medium sm:text-lg'
              >
                <p className='text-primary'>const</p>
                <p className='text-secondary'>{name}</p>
                <p className='text-primary'>=</p>
                <span className='text-tertiary break-all sm:break-normal'>
                  {variant === 'email' ? (
                    <a
                      href={`mailto:${value}`}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='transition-colors hover:text-fuchsia-400'
                    >
                      {`"${value}"`}
                      <span className='text-primary'>;</span>
                    </a>
                  ) : (
                    <a
                      href={value}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='transition-colors hover:text-fuchsia-400'
                    >
                      {`"${value}"`}
                      <span className='text-primary'>;</span>
                    </a>
                  )}
                </span>
              </span>
            ))}
          </li>
        ))}
      </ul>
    </>
  );
};
