import { PropsWithChildren } from 'react';
import styled from 'styled-components';

import * as colors from 'src/styles/_colors.module.scss';

const StyledCard = styled.div`
  padding: 1.5rem;
  background-color: ${colors.white};
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Card = ({ children, ...rest }: PropsWithChildren<any>) => (
  <StyledCard {...rest}>{children}</StyledCard>
);

export default Card;
