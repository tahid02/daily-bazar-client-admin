import { IProduct } from 'types';
import { useState, useEffect } from 'react';

type statusType = 'idle' | 'pending' | 'success' | 'error';
const useAsync = <T>(asyncFunction: () => Promise<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [status, setStatus] = useState<statusType>('idle');
  const [error, setError] = useState<string | null>(null);

  console.log('async function', asyncFunction);
  useEffect(() => {
    setStatus('pending');
    setData(null);
    setError(null);
    asyncFunction()
      .then((res) => {
        setData(res);
        console.log('response data useAsync', res);
        setStatus('success');
        setError(null);
      })
      .catch((error) => {
        setError(error);
        setStatus('error');
        setData(null);
      });
  }, [asyncFunction]);

  return {
    data,
    error,
    isLoading: status === 'pending',
    isSuccess: status === 'success',
    isError: status === 'error',
  };
};

export default useAsync;
