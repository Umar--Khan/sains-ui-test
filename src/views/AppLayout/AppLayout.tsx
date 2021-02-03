import { PropsWithChildren, ReactNode } from 'react';

const AppLayout = ({ children }: PropsWithChildren<ReactNode>) => (
  <div>{children}</div>
);

export default AppLayout;
