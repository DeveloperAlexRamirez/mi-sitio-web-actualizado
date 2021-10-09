import { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import BannerImg from './BannerImg';

import * as FaIcons from 'react-icons/fa';
import * as CgIcons from 'react-icons/cg';

import IconsRedes from './IconsRedes';
import Secciones from './Secciones';

import { redes } from '../redes/redes';

const ContainerAbsolute = styled.div`
  position: absolute;
`;

const Nav = styled.nav`
  position: absolute;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
  padding: 1.3rem;

  background-color: ${({ activetransparent }) =>
    activetransparent === true ? '#191919' : 'transparent'};

  transition: 300ms;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1700px;
  margin: 0 auto;
  justify-content: flex-end;
`;

const UlSecciones = styled.ul`
  color: white;
  display: none;
  flex-direction: column;
  flex: 1;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;

const DivRedes = styled.div``;

const ContainerBtnHamburger = styled.div`
  display: flex;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
    background-color: red;
  }
`;

const ContanierChildrensSidebar = styled.div`
  width: 100%;
  padding: 1.5rem;
`;

const ElementosSidebar = styled.div`
  padding-top: 1rem;
  /* background-color: blue; */
`;

const UlSeccionesSidebar = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  flex: 1;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Layout = (props) => {
  const [activetransparent, setActiveTransparent] = useState(false);
  // Menu lateral (mobile)
  const [sidebar, setSidebar] = useState(false);
  const changeSidebar = () => setSidebar(!sidebar);

  const isMounted = useRef(true);
  // Para el efecto del header

  useEffect(() => {
    if (!isMounted.current) return;
    const menuTransparent = () => {
      if (window.scrollY >= 30) {
        setActiveTransparent(true);
      } else {
        setActiveTransparent(false);
      }
    };

    window.addEventListener('scroll', menuTransparent);

    return () => {
      isMounted.current = false;
      window.addEventListener('scroll', setActiveTransparent(true));
    };
  }, []);

  return (
    <>
      <Nav activetransparent={activetransparent}>
        <Container>
          <UlSecciones>
            {/* Inicio, Acerca de.. etc */}
            <Secciones />
          </UlSecciones>

          <DivRedes>
            {redes.map((red, index) => (
              <a key={index} href={red.url} target={red.target}>
                {red.icon}
              </a>
            ))}
          </DivRedes>

          {/* Btn Hamburger */}
          <ContainerBtnHamburger>
            <FaIcons.FaBars
              onClick={changeSidebar}
              color="white"
              size={20}
              style={{ marginLeft: '1rem' }}
            />
          </ContainerBtnHamburger>

          {/* Toda esta logica es para el sidebar */}
          <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ContanierChildrensSidebar>
              <div style={{ textAlign: 'end' }}>
                {/* Icon & Btn close */}
                <CgIcons.CgClose
                  onClick={changeSidebar}
                  size={20}
                  color="white"
                  style={{ cursor: 'pointer' }}
                />
              </div>

              <ElementosSidebar>
                <UlSeccionesSidebar>
                  <Secciones />
                </UlSeccionesSidebar>
              </ElementosSidebar>
            </ContanierChildrensSidebar>
          </div>
        </Container>
      </Nav>

      <main>{props.children}</main>
    </>
  );
};

export default Layout;
