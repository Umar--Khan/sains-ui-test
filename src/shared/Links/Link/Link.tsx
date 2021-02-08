import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

import * as colors from 'src/styles/_colors.module.scss';

interface LinkProps {
  children: any;
  to: string;
}

const StyledLink = styled(RouterLink)`
  text-decoration: none;
  color: ${colors.orangeDark};
`;

const Link = ({ children, to }: LinkProps) => (
  <StyledLink to={to}>{children}</StyledLink>
);

export default Link;
