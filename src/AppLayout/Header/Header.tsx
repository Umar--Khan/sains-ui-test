import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import { ROUTES_MAP } from 'const/routes';
import * as colors from 'styles/_colors.module.scss';

const StyledHeader = styled.header`
  background-color: ${colors.white};
  border-bottom: 2px solid ${colors.greyLight};
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-height: 4rem;
  max-width: 90rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin: auto;
  @media (min-width: 720px) {
    width: 70%;
  }
  @media (min-width: 720px) and (max-width: 1200px) {
    width: 75%;
  }
`;

const StyledLink = styled(Link)`
  margin-left: 1.25rem;
  text-decoration: none;
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: 700;
  color: ${colors.greyDark};

  &:hover {
    text-decoration: underline;
    color: ${colors.orangeDark};
  }
`;

const Header = () => (
  <StyledHeader>
    <HeaderContainer>
      <NavContainer>
        <StyledLink to={ROUTES_MAP.PRODUCTS}>Shop</StyledLink>
        <StyledLink to={ROUTES_MAP.BASKET}>Your basket (0 items)</StyledLink>
      </NavContainer>
    </HeaderContainer>
  </StyledHeader>
);

export default Header;
