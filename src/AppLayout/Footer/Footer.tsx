import styled from 'styled-components';
import * as colors from '../../styles/_colors.module.scss';

const StyledFooter = styled.footer`
  background-color: ${colors.greyDark};
  min-height: 6rem;
  color: ${colors.white};
  font-size: 0.9rem;
  font-weight: 400;
`;

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
`;

const StyledSpan = styled.span`
  font-weight: 700;
`;

const Footer = () => (
  <StyledFooter>
    <Container>
      <StyledSpan>Sainsbury&rsquo;s, Live Well For Less</StyledSpan>
      <div>&copy; J Sainsbury plc {new Date().getFullYear()}</div>
    </Container>
  </StyledFooter>
);

export default Footer;
