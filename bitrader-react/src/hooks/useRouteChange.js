import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useRouteChange = (callback) => {
  const location = useLocation();

  useEffect(() => {
    callback();
  }, [location, callback]);
};