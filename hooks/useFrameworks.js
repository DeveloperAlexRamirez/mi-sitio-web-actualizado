import { useEffect, useState } from 'react';
import { strapiDB } from '../pages/api/strapiDB';

export const useFrameworks = () => {
  const [frameworks, setFrameworks] = useState([]);
  const [isloadingFrameworks, setLoading] = useState(true);

  const getImgFrameworks = async () => {
    const resp = await strapiDB.get('/categorias');
    setFrameworks(resp.data);
    setLoading(false);
  };

  useEffect(() => {
    getImgFrameworks();
  }, []);

  return {
    frameworks,
    isloadingFrameworks,
  };
};
