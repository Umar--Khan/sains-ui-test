import { PropsWithChildren, ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 50vh;
  max-width: 90rem;
  margin: 4rem auto;
  padding: 0 1rem;
  width: 100%;
  @media (min-width: 720px) {
    padding: 0;
    width: 70%;
  }
  @media (min-width: 720px) and (max-width: 1200px) {
    padding: 0;
    width: 75%;
  }
`;

const Main = ({ children }: PropsWithChildren<ReactNode>) => (
  <main>
    <Container>{children}</Container>
  </main>
);

export default Main;
