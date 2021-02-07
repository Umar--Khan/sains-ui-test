import { PropsWithChildren } from 'react';
import styled from 'styled-components';

import * as colors from 'src/styles/_colors.module.scss';

import { MouseEventHandler } from 'react';

export interface ButtonProps {
  ariaLabel?: string;
  className?: string;
  id?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const StyledButton = styled.button`
  background-color: ${colors.orange};
  color: ${colors.white};
  width: 100%;
  font-size: 1.25rem;
  font-weight: 700;
  box-shadow: 0 0 0 5px transparent;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  line-height: 1.5rem;
  border: 0;
  cursor: pointer;
`;

const Button = ({
  children,
  className,
  id,
  onClick,
  ariaLabel,
  ...rest
}: PropsWithChildren<ButtonProps>) => (
  <StyledButton
    className={className}
    id={id}
    onClick={onClick}
    aria-label={ariaLabel}
    {...rest}
  >
    {children}
  </StyledButton>
);

export default Button;
