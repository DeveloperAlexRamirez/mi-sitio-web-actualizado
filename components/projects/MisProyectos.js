import styled from '@emotion/styled';
import { useProyectos } from '../../hooks/useProyectos';

import {
  ContenedorCards,
  DescripcionCard,
  Title,
} from '../services/MisServicios';

import Link from 'next/link';
import ReactLoading from 'react-loading';
import Loading from '../helpers/Loading';

const ContainerSupremo = styled.div`
  padding-top: 2rem;
  max-width: 1700px;
  margin: 0 auto;
  margin-bottom: 5rem;
`;

const CustomTextoDescripcionCard = styled(DescripcionCard)`
  text-align: center;
`;

const CustomContenedorCards = styled(ContenedorCards)`
  max-width: 1500px;
  margin: 0 auto;
  justify-content: center;
`;

export const Card = styled.div`
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: calc(100% - 1rem);
  background-color: #191919;
  border-radius: 10px;
  margin-bottom: 1rem;
  padding: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  transition: 300ms;

:hover {
    transform: translateY(-3px);
  }

 @media screen and (min-width:768px){
   flex-basis: calc(50% - 1rem);
    margin-bottom: unset;
  } 

   @media screen and (min-width:1200px){
   flex-basis: calc(33% - 1rem);
    margin-bottom: unset;
  } 
 }
`;

export const Button = styled.button`
  background-color: transparent;
  color: white;
  margin-top: 2rem;
  border-radius: 5px;
  padding: 0.7rem 1.2rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: .8rem;
  transition: 300ms;
  border: 1px solid white;
  text-transform: uppercase;


  :hover {
    cursor: pointer;
    background-color: #30d3f0;
    border: 1px solid #30d3f0;
    transform: translateY(-3px);
}
  }
`;

const MisProyectos = () => {
  const { proyectos, isloading, id } = useProyectos();

  if (isloading) {
    return <Loading />;
  }

  return (
    <ContainerSupremo id="mis-proyectos">
      <Title>Mis últimos proyectos</Title>
      <CustomTextoDescripcionCard>
        Estos son algunos de los proyectos que he realizado.
      </CustomTextoDescripcionCard>
      <CustomContenedorCards>
        {proyectos.map((proyecto, index) => {
          return (
            <Card key={proyecto.Imagen[0].url}>
              <img
                src={`https://mi-app-strapi-heroku.herokuapp.com${proyecto.Imagen[0].url}`}
                alt={proyecto.Imagen[0].url}
                className="img-proyecto"
              />
              <Link
                href={{
                  pathname: '/proyecto/[id]',
                  query: { id: proyecto.id },
                }}
                as={`/proyecto/${proyecto.id}`}
              >
                <Button>Detalles</Button>
              </Link>
            </Card>
          );
        })}
      </CustomContenedorCards>
    </ContainerSupremo>
  );
};

export default MisProyectos;
