import { useEffect, useState } from 'react';
import { strapiDB } from '../pages/api/strapiDB';

export const useProyectos = () => {
  const [proyectos, setProyectos] = useState([]);
  const [isloading, setLoading] = useState(true);

  const getImgProyectos = async () => {
    const resp = await strapiDB.get('/propiedades');
    setProyectos(resp.data);
    setLoading(false);
  };

  useEffect(() => {
    getImgProyectos();
  }, []);

  return {
    proyectos,
    isloading,
  };
};
