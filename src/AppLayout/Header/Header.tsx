import { useContext } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import styled from 'styled-components';

import { ROUTES_MAP } from 'src/const/routes';
import { BasketContext } from 'src/context/BasketContext';
import * as colors from 'src/styles/_colors.module.scss';
import UserBasket from './UserBasket';

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

const NavLink = styled(RouterNavLink)`
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

  &.active {
    text-decoration: underline;
    color: ${colors.orange};
  }
`;

const Header = () => {
  const { basketLocal } = useContext(BasketContext);

  const itemsInBasket = basketLocal?.reduce<number>((acc, { quantity }) => {
    acc += quantity;
    return acc;
  }, 0);

  return (
    <StyledHeader>
      <HeaderContainer>
        <NavContainer>
          <NavLink to={ROUTES_MAP.STORE}>Store</NavLink>
          <NavLink to={ROUTES_MAP.BASKET}>
            <UserBasket itemsInBasket={itemsInBasket ? itemsInBasket : 0} />
          </NavLink>
        </NavContainer>
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;
