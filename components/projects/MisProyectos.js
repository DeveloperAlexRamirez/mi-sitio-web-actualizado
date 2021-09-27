import styled from '@emotion/styled';
import { useProyectos } from '../../hooks/useProyectos';
import { useEffect, useState } from 'react';

import {
  ContenedorCards,
  DescripcionCard,
  Title,
} from '../services/MisServicios';

import Link from 'next/link';
import ReactLoading from 'react-loading';
// import Image from 'next/image';
import { Image, Transformation } from 'cloudinary-react';
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
  padding: unset;
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

const ContenedorCategoria = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  padding: 1rem;
`;

const MisProyectos = ({ proyectos, isloading }) => {
  return (
    <>
      {isloading ? (
        <Loading />
      ) : (
        <ContainerSupremo id="mis-proyectos">
          <Title>Mis últimos proyectos</Title>
          <CustomTextoDescripcionCard>
            Estos son algunos de los proyectos que he realizado.
          </CustomTextoDescripcionCard>

          <CustomContenedorCards>
            {proyectos.map((proyecto, index) => {
              // console.log(proyecto.Imagen[0].hash);
              return (
                <Card key={index}>
                  <Image
                    secure="true"
                    cloudName="dmu2hhva6"
                    publicId={proyecto.Imagen[0].hash}
                    dpr="auto"
                    responsive
                    width="auto"
                    crop="thumb"
                    responsiveUseBreakpoints="false"
                    // width="350"
                    // height="250"
                    // // crop="thumb"
                    // gravity="face"
                    // fetchFormat="auto"
                    // quality="50"
                  />

                  <Link href={`/proyecto/${proyecto.id}`}>
                    <Button>
                      <a>Detalles</a>
                    </Button>
                  </Link>
                </Card>
              );
            })}
          </CustomContenedorCards>
        </ContainerSupremo>
      )}
    </>
  );
};

export default MisProyectos;
