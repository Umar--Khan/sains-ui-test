import { useCallback, useEffect, useState } from 'react';

import axiosConfig from 'src/axios/axiosConfig';
import { HTTP_METHODS } from 'src/const/httpMethods';

export interface UseResourceProps {
  url: string;
  method?: HTTP_METHODS;
  body?: Record<string, any>;
  headers?: Record<string, string>;
}

const useAxios = ({
  url,
  method = HTTP_METHODS.GET,
  body,
  headers,
  ...rest
}: UseResourceProps) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const fetchData = useCallback(async (): Promise<void> => {
    setIsLoading(true);
    try {
      const res = await axiosConfig({
        url,
        method,
        data: body,
        headers,
        ...rest,
      });
      if (res.data) {
        setData(res.data);
      }
    } catch (error) {
      setError(true);
      setErrorMessage(error?.response?.data);
    }
    setIsLoading(false);
    // eslint-disable-next-line
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, error, isLoading, errorMessage };
};

export default useAxios;
