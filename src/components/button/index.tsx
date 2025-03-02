import { FC, ReactNode, ButtonHTMLAttributes } from 'react';

interface BaseButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  children: ReactNode;
  prefixIcon?: ReactNode;
  postfixIcon?: ReactNode;
  className?: string;
  fullWidth?: boolean;
}

interface ButtonAsButtonProps extends BaseButtonProps {
  href?: never;
}

interface ButtonAsLinkProps extends BaseButtonProps {
  href: string;
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export const Button: FC<ButtonProps> = ({
  href,
  children,
  prefixIcon,
  postfixIcon,
  className = '',

  ...props
}) => {
  const buttonContent = (
    <>
      {prefixIcon}
      {children}
      {postfixIcon}
    </>
  );

  const buttonClassName = `flex cursor-pointer justify-center min-w-[220px] px-8 py-[12px] items-center gap-4 border border-fuchsia-400/20
    bg-slate-900 text-slate-300 transition-all duration-300
    hover:border-fuchsia-400/40 hover:bg-slate-800
  ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className={buttonClassName}
      >
        <span className='flex items-center justify-center gap-4'>
          {buttonContent}
        </span>
      </a>
    );
  }

  return (
    <button className={buttonClassName} {...props}>
      {buttonContent}
    </button>
  );
};
