import { PropsWithChildren } from 'react';
import styled from 'styled-components';

import { ButtonProps } from './Button.d';
import * as colors from 'styles/_colors.module.scss';

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
  color,
  id,
  onClick,
  ...rest
}: PropsWithChildren<ButtonProps>) => (
  <StyledButton
    className={className}
    color={color}
    id={id}
    onClick={onClick}
    {...rest}
  >
    {children}
  </StyledButton>
);

export default Button;
