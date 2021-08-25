import styled from '@emotion/styled';
import { useFrameworks } from '../../hooks/useFrameworks';
import {
  ContainerSupremo,
  Title,
  DescripcionCard,
} from '../services/MisServicios';
import Link from 'next/link';
import Image from 'next/image';
import css from '../../public/tecnologias/css.png';
import mongodb from '../../public/tecnologias/mongodb.png';
import mysql from '../../public/tecnologias/mysql.png';
import node from '../../public/tecnologias/node.png';
import reactNative from '../../public/tecnologias/react-native.png';
import react from '../../public/tecnologias/react.png';
import ts from '../../public/tecnologias/ts.png';
import vue from '../../public/tecnologias/vue.png';

const CustomDescripcionCard = styled(DescripcionCard)`
  text-align: center;
  padding: 1rem;

  @media screen and (min-width: 768px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const ContenedorCards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 500px;
  margin: 0 auto;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 80px;
  height: 80px;
  margin-left: 1rem;
  margin-top: 1rem;
  padding: 0.5rem;
`;

const MisFrameworks = () => {
  const { frameworks, isloading } = useFrameworks();

  if (isloading) {
    return null;
  }

  return (
    <ContainerSupremo>
      <Title>Frameworks y tecnologías</Title>
      <CustomDescripcionCard>
        Estas son algunas de las bibliotecas, tecnologías y lenguajes que he
        utilizado en los proyectos que he realizado.
      </CustomDescripcionCard>

      <ContenedorCards>
        {/* {frameworks.map((f) => { */}
        {/* return ( */}
        {/* <Card key={f.id}>
              <img
                src={`https://mi-app-strapi-heroku.herokuapp.com${f.Tecnologia[0].url}`}
                alt={f.Nombre}
                className="img-framework"
              />
            </Card> */}

        <Card>
          <Image src={css} alt="css" />
        </Card>

        <Card>
          <Image src={reactNative} alt="reactNative" />
        </Card>

        <Card>
          <Image src={react} alt="react" />
        </Card>

        <Card>
          <Image src={ts} alt="ts" />
        </Card>

        <Card>
          <Image src={mysql} alt="mysql" />
        </Card>

        <Card>
          <Image src={vue} alt="vue" />
        </Card>

        <Card>
          <Image src={mongodb} alt="mongodb" />
        </Card>

        <Card>
          <Image src={node} alt="node" />
        </Card>

        {/* ); */}
        {/* })} */}
      </ContenedorCards>
    </ContainerSupremo>
  );
};

export default MisFrameworks;
