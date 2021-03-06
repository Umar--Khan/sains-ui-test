import { useContext, useMemo } from 'react';
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

  const itemsInBasket = useMemo(
    () =>
      basketLocal?.reduce<number>((acc, { quantity }) => {
        acc += quantity;
        return acc;
      }, 0),
    [basketLocal],
  );

  const totalPriceBasket = useMemo(
    () =>
      basketLocal?.reduce<number>((acc, basketProduct) => {
        acc += basketProduct.quantity * basketProduct.productDetail.price;
        return parseFloat(acc.toFixed(2));
      }, 0),
    [basketLocal],
  );

  return (
    <StyledHeader>
      <HeaderContainer>
        <NavContainer>
          <NavLink to={ROUTES_MAP.STORE}>Store</NavLink>
          <NavLink to={ROUTES_MAP.BASKET}>
            <UserBasket
              itemsInBasket={itemsInBasket ? itemsInBasket : 0}
              totalPriceBasket={totalPriceBasket}
            />
          </NavLink>
        </NavContainer>
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;
