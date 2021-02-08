import { renderHook, act } from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';
import useAxios from '../useAxios';
import axiosInstance from 'src/axios/axiosConfig';
import { apiBaseUrl } from 'src/const/apiBaseUrl';
const mock = new MockAdapter(axiosInstance);

const mockURL = '/mockURL';
const mockData = [
  {
    productId: 1,
    price: 200,
    name: 'Item name',
  },
];

describe('useAxios', () => {
  beforeEach(() => {
    mock.reset();
  });

  afterAll(() => {
    mock.restore();
  });

  it('Should object with keys: data, error, isLoading, errorMessage', async () => {
    const { result } = renderHook(() => useAxios({ url: '' }));
    await act(async () => {
      expect(result.current).toHaveProperty('isLoading');
      expect(result.current).toHaveProperty('error');
      expect(result.current).toHaveProperty('data');
      expect(result.current).toHaveProperty('errorMessage');
    });
  });

  it('Should add baseURL to request', async () => {
    const { waitForNextUpdate } = renderHook(() => useAxios({ url: mockURL }));
    mock.onGet(mockURL).reply(200, mockData);

    await waitForNextUpdate();

    await act(async () => {
      expect(mock.axiosInstance.defaults.baseURL).toEqual(apiBaseUrl);
    });
  });

  it('Should initialise data as empty', async () => {
    const { result } = renderHook(() => useAxios({ url: '' }));
    await act(async () => {
      expect(result.current.data).toBe(null);
    });
  });

  it('Should initialise error as false', async () => {
    const { result } = renderHook(() => useAxios({ url: '' }));
    await act(async () => {
      expect(result.current.error).toBe(false);
    });
  });

  it('Should initialise errorMessage as null', async () => {
    const { result } = renderHook(() => useAxios({ url: '' }));
    await act(async () => {
      expect(result.current.errorMessage).toBe(null);
    });
  });

  it('Should return isLoading as true when waiting for response', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useAxios({ url: '/mockURL' }),
    );
    mock.onGet(mockURL).reply(200, mockData);

    expect(result.current.isLoading).toBe(true);
    await waitForNextUpdate();
  });

  it('Should return data and loading, error as false, errorMessage as null', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useAxios({ url: mockURL }),
    );
    mock.onGet(mockURL).reply(200, mockData);

    await waitForNextUpdate();

    await act(async () => {
      expect(result.current.data).toEqual(mockData);
      expect(result.current.isLoading).toBe(false);
      expect(result.current.error).toBe(false);
      expect(result.current.errorMessage).toBe(null);
    });
  });

  it('Should return error message & isLoading: false & error: true when request fails', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useAxios({ url: mockURL }),
    );
    mock.onGet(mockURL).reply(404, 'Error: Message');

    await waitForNextUpdate();

    await act(async () => {
      expect(result.current.data).toEqual(null);
      expect(result.current.isLoading).toBe(false);
      expect(result.current.error).toBe(true);
      expect(result.current.errorMessage).toBe('Error: Message');
    });
  });
});
