import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import BannerImg from '../components/layout/BannerImg';
import SobreMi from '../components/about/SobreMi';
import MisServicios from '../components/services/MisServicios';
import MisProyectos from '../components/projects/MisProyectos';
import MisFrameworks from '../components/technologies/MisFrameworks';
import Formulario from '../components/contact/Formulario';
import { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';

import * as IoIosIcons from 'react-icons/io';
import Footer from '../components/footer/Footer';

const DivButton = styled.div`
  position: fixed;
  bottom: 30px;
  right: 20px;
`;

const Button = styled.button`
  background-color: black;
  border-radius: 100px;
  transition: 300ms;
  padding: 0.6rem 0.8rem;
  border: 0;

  :hover {
    cursor: pointer;
    background-color: #30d3f0;
    transform: translateY(-3px);
}
  }
`;

const Home = () => {
  const [isactive, setIsActive] = useState(false);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const ismounted = useRef(true);

  useEffect(() => {
    if (!ismounted.current) return;
    const btnToTop = () => {
      if (window.scrollY >= 400) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener('scroll', btnToTop);

    return () => {
      ismounted.current = false;
      window.addEventListener('scroll', setIsActive(true));
    };
  }, []);

  return (
    <div>
      <Head>
        <title>Alex | Inicio</title>

        <meta name="theme-color" content="#000000" />

        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Spartan&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap"
          rel="stylesheet"
        />

        <link rel="icon" href="/static/favicon.ico" />
      </Head>

      {/* Button ScrolToTop */}
      {isactive === true && (
        <DivButton>
          <Button onClick={scrollTop}>
            <IoIosIcons.IoIosArrowUp size={20} color="white" />
          </Button>
        </DivButton>
      )}

      <Layout>
        <BannerImg />
        <SobreMi />
        <MisServicios />
        <MisProyectos />
        <MisFrameworks />
        <Formulario />
        <Footer />
      </Layout>
    </div>
  );
};

export default Home;
