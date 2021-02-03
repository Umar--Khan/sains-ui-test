import { PropsWithChildren } from 'react';

import { ButtonProps } from './Button.d';

const Button = ({
  children,
  className,
  color,
  id,
  onClick,
  ...rest
}: PropsWithChildren<ButtonProps>) => (
  <button
    className={className}
    color={color}
    id={id}
    onClick={onClick}
    {...rest}
  >
    {children}
  </button>
);

export default Button;
