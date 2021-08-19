import Link from 'next/link';
import styled from '@emotion/styled';

const Li = styled.li`
  font-family: 'Poppins', sans-serif;
  margin-right: 2rem;
  line-height: 2rem;
`;

const Secciones = () => {
  return (
    <>
      <Li>
        <Link href="/#">Inicio</Link>
      </Li>
      <Li>
        <Link href="/#acerca-de">Acerca de</Link>
      </Li>
      <Li>
        <Link href="/#servicios">Servicios</Link>
      </Li>
      <Li>
        <Link href="/#mis-proyectos">Portafolio</Link>
      </Li>
      <Li>
        <Link href="/#contacto">Contacto</Link>
      </Li>
    </>
  );
};

export default Secciones;
