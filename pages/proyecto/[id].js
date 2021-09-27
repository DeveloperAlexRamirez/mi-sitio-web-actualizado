import styled from '@emotion/styled';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import Footer from '../../components/footer/Footer';
import Loading from '../../components/helpers/Loading';
import Layout from '../../components/layout/Layout';
import {
  ContainerSupremo,
  ContenedorCards,
} from '../../components/services/MisServicios';

import { strapiDB } from '../api/strapiDB';

import { Image } from 'cloudinary-react';

const Header = styled(ContainerSupremo)`
  margin-top: 3rem;
  display: flex;
  padding: 2rem;

  justify-content: center;
`;

const H1 = styled.h1`
  font-size: 2rem;
  font-family: 'Montserrat', sans-serif;
  color: white;
  background: -webkit-linear-gradient(#2a70e0, #2dd2f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #2dd2f7;
  text-align: center;

  @media screen and (min-width: 480px) {
    font-size: 3rem;
  }
`;

const Galeria = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 3rem;
  padding: 1rem;
`;

const H2 = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
  color: white;
  padding-bottom: 1rem;
  border-bottom: 3px solid white;
  margin: 0;
  width: 100%;
`;

const H3 = styled.h3`
  font-family: 'Montserrat', sans-serif;
  color: white;
  font-size: 1.3rem;
  text-align: left;
`;

const Card = styled.div`
  flex: 1;
  background-color: #191919;
  border-radius: 10px;
  margin-bottom: 1rem;
  padding: 2rem;
`;

const ContenedorDetalles = styled.div`
  margin-bottom: 1rem;
`;

const TextoDetalles = styled.p`
  font-size: 1.5rem;
  color: #ada7a7;
  font-family: 'Spartan', sans-serif;
`;

const BCategoria = styled.b`
  color: #ada7a7;
  font-family: 'Spartan', sans-serif;
  font-size: 1rem;
`;

const DivIconCategoria = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Index = () => {
  const [proyecto, setProyecto] = useState('');
  const [isloading, setIsLoading] = useState(true);

  const { Nombre, Descripcion, categorias, ImagenDetalle } = proyecto;

  const pathStrapi = 'https://mi-app-strapi-heroku.herokuapp.com';

  // TODO: obtiene el id mediante el query(url)
  const router = useRouter();

  const {
    query: { id },
  } = router;

  const isMounted = useRef(true);

  useEffect(() => {
    if (id) {
      const getProyecto = async (id) => {
        // Consulta (findOne)
        const resp = await strapiDB.get(`/propiedades/${id}`);
        setProyecto(resp.data);
        setIsLoading(false);
      };
      getProyecto(id);
    }

    return () => {
      isMounted.current = false;
    };
  }, [id]);

  return (
    <>
      <Head>
        <title>Alex | Proyectos</title>
      </Head>
      <Layout>
        <ContainerSupremo>
          <Header>
            <H1>{Nombre}</H1>
          </Header>
        </ContainerSupremo>

        <Galeria>
          <H2>Detalles</H2>
          {isloading ? (
            <Loading />
          ) : (
            <>
              <ContenedorDetalles>
                <TextoDetalles>{Descripcion}</TextoDetalles>
                <H3>Categoría</H3>
                <BCategoria>{categorias[0].Nombre}</BCategoria>
                <div style={{ flexDirection: 'row' }}>
                  {categorias.map((c, i) => (
                    <img
                      src={`${c.Tecnologia[0].url}`}
                      alt={c.id}
                      className="img-categoria"
                      key={c.id}
                      style={{ marginRight: '6px' }}
                    />
                  ))}
                </div>
              </ContenedorDetalles>

              <H2>Galería</H2>
              <ContenedorCards>
                {ImagenDetalle.map(({ id, url, formats }) => {
                  return (
                    <Card key={id}>
                      {/* <img
                        src={`${formats.small.hash}`}
                        alt={id}
                        className="img-proyecto"
                      /> */}
                      <Image
                        secure="true"
                        cloudName="dmu2hhva6"
                        publicId={formats.small.hash}
                        width="220"
                        height="450"
                        // crop="thumb"
                        gravity="face"
                        fetchFormat="auto"
                        quality="60"
                      />
                    </Card>
                  );
                })}
              </ContenedorCards>
            </>
          )}
        </Galeria>

        <Footer />
      </Layout>
    </>
  );
};

export default Index;
