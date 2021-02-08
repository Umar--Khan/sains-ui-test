import { renderHook, act } from '@testing-library/react-hooks';
import useLocalStorage from '../useLocalStorage';

const mockObject = [{ product: { productId: 1, itemName: 'Batteries' } }];

describe('useLocalStorage', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(() => null),
        setItem: jest.fn(() => null),
      },
      writable: true,
    });
  });

  it('Should call getItem when key is passed', async () => {
    const { result } = renderHook(() => useLocalStorage('basket', []));
    const [basketValue] = result.current;

    await act(async () => {
      expect(basketValue).toEqual([]);
      expect(window.localStorage.getItem).toHaveBeenCalledTimes(1);
      expect(window.localStorage.getItem).toHaveBeenCalledWith('basket');
    });
  });

  it('Should call setItem when setValue is called', async () => {
    const { result } = renderHook(() => useLocalStorage('basket', []));
    const [basketValue, setBasketValue] = result.current;

    await act(async () => {
      setBasketValue(mockObject);
      expect(basketValue).toEqual([]);
      expect(window.localStorage.setItem).toHaveBeenCalledTimes(1);
      expect(window.localStorage.setItem).toHaveBeenCalledWith(
        'basket',
        JSON.stringify(mockObject),
      );
    });
  });
});
