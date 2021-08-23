import styled from '@emotion/styled';

import * as RiIcons from 'react-icons/ri';
import * as AiIcons from 'react-icons/ai';

export const ContainerSupremo = styled.div`
  padding-top: 2rem;
  background-color: black;
  padding-bottom: 2rem;
`;

export const Title = styled.h1`
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  text-align: center;
  margin: 0;

  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const ContenedorCards = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2rem;
  max-width: 1220px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Card = styled.div`
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: calc(100% - 1rem);
  background-color: #191919;
  border-radius: 10px;
  height: 300px;
  margin-bottom: 1rem;
  padding: 2rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  transition: 300ms;

  @media screen and (max-width: 580px) {
    padding: 1rem;
    height: 200px;

    background-image: -webkit-gradient(
      linear,
      left top,
      right top,
      from(#2dd2f7),
      to(#2a70e0)
    );
    background-image: -webkit-linear-gradient(left, #2dd2f7, #2a70e0);
    background-image: -moz-linear-gradient(left, #2dd2f7, #2a70e0);
    background-image: linear-gradient(90deg, #2dd2f7, #2a70e0);
  }

  @media screen and (min-width: 820px) {
    flex-basis: calc(33% - 1rem);
    margin-bottom: unset;
  }

  :hover {
    transform: translateY(-3px);
  }
`;

const TituloCard = styled.p`
  color: white;
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  margin: 0;
  text-align: left;
  padding-top: 1rem;
`;

export const DescripcionCard = styled.p`
  color: #ada7a7;
  font-family: 'Spartan', sans-serif;
  text-align: left;

  @media screen and (max-width: 580px) {
    color: white;
  }
`;

const MisServicios = () => {
  return (
    <ContainerSupremo id="servicios">
      <Title>Mis servicios</Title>

      <ContenedorCards>
        <Card>
          <RiIcons.RiComputerLine size={50} color="white" />
          <TituloCard>Desarrollo web</TituloCard>
          <DescripcionCard>
            Construir sitios web, portafolios basasos en borradores/prototipos.
          </DescripcionCard>
        </Card>

        <Card>
          <RiIcons.RiDatabase2Line size={50} color="white" />
          <TituloCard>Desarrollo Backend</TituloCard>
          <DescripcionCard>
            Desarrollo de servicios backend, rest apis, con diferentes
            tecnologías.
          </DescripcionCard>
        </Card>

        <Card>
          <AiIcons.AiOutlineMobile size={50} color="white" />
          <TituloCard>Desarrollo móvil</TituloCard>
          <DescripcionCard>
            Construir aplicaciones móviles multiplataforma, pero principalmente
            para Android.
          </DescripcionCard>
        </Card>
      </ContenedorCards>
    </ContainerSupremo>
  );
};

export default MisServicios;
