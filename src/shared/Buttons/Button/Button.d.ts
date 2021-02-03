import { MouseEventHandler } from 'react';

export interface ButtonProps {
  ariaLabel?: string;
  className?: string;
  color?: string;
  id?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
