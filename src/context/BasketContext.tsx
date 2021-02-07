import { createContext, PropsWithChildren, useMemo } from 'react';
import { BasketProduct } from 'src/views/Store/Store.d';
import useLocalStorage from 'src/hooks/useLocalStorage';

export interface BasketWrapper {
  setBasketLocal: (arg: any) => void;
  basketLocal: BasketProduct[];
}

const BasketContext = createContext({} as BasketWrapper);

const BasketProvider = ({ children }: PropsWithChildren<any>) => {
  const [basketLocal, setBasketLocal] = useLocalStorage('basket', []);

  const basketValue = useMemo(
    () =>
      ({
        basketLocal,
        setBasketLocal,
      } as BasketWrapper),
    [basketLocal, setBasketLocal],
  );

  return (
    <BasketContext.Provider value={basketValue}>
      {children}
    </BasketContext.Provider>
  );
};

export { BasketContext, BasketProvider };
