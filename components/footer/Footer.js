import styled from '@emotion/styled';
import IconsRedes from '../layout/IconsRedes';
import { ContainerSupremo } from '../services/MisServicios';
import { redes } from '../redes/redes';

const ContenedorFooter = styled.div`
  display: flex;
  color: white;
  padding: 0 3rem;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: center;
`;

const Footer = (props) => {
  const year = new Date().getFullYear();

  return (
    <ContainerSupremo>
      <ContenedorFooter>
        <CardFooter style={{ color: 'white', flex: 1 }}></CardFooter>
        <CardFooter style={{ color: 'white', flex: 1 }}>
          <p>Todos los derechos reservados &copy; {year}</p>
        </CardFooter>
        <CardFooter style={{ color: 'white', flex: 1 }}>
          {redes.map((red, index) => (
            <a key={index} href={red.url} target={red.target}>
              {red.icon}
            </a>
          ))}
        </CardFooter>
      </ContenedorFooter>
      <main>{props.children}</main>
    </ContainerSupremo>
  );
};

export default Footer;
