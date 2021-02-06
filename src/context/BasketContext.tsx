import { createContext, PropsWithChildren, useMemo } from 'react';
import { SelectedProduct } from 'views/Store/Store.d';
import useLocalStorage from 'hooks/useLocalStorage';

interface BasketWrapper {
  setBasketLocal: (arg: any) => void;
  basketLocal: SelectedProduct[];
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
