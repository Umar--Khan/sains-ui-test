import { PropsWithChildren, ReactNode } from 'react';
import styled from 'styled-components';

import * as colors from 'styles/_colors.module.scss';

const StyledCard = styled.div`
  padding: 1.5rem;
  background-color: ${colors.white};
  margin: 1rem 0;
`;

const Card = ({ children }: PropsWithChildren<ReactNode>) => (
  <StyledCard>{children}</StyledCard>
);

export default Card;
