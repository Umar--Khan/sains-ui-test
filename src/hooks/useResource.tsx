import { useCallback, useEffect, useState } from 'react';

import axiosConfig from 'src/axios/axiosConfig';
import { HTTP_METHODS } from 'src/const/httpMethods';

export interface UseResourceProps {
  url: string;
  method?: HTTP_METHODS;
  body?: Record<string, any>;
  headers?: Record<string, string>;
}

const useResource = ({
  url,
  method = HTTP_METHODS.GET,
  body,
  headers,
  ...rest
}: UseResourceProps) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

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
      setError(error);
    }
    setIsLoading(false);
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, error, isLoading };
};

export default useResource;
