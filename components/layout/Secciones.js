import Link from 'next/link';
import styled from '@emotion/styled';
import favicon from '../../static/favicon.ico';
import Image from 'next/image';

const Li = styled.li`
  font-family: 'Poppins', sans-serif;
  margin-right: 2rem;
  line-height: 2rem;
`;

const Secciones = () => {
  return (
    <>
      <Li>
        <Link href="/">
          <a>
            <Image src={favicon} alt="logo" width="30" height="30" />
          </a>
        </Link>
      </Li>
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
