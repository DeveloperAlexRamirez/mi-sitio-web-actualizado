import styled from '@emotion/styled';
import { useState } from 'react';

import photoPersonal from '../../public/personal-photo.jpeg';
import SkillsCertificados from './SkillsCertificados';

const DivSupremo = styled.div`
  padding-bottom: 5rem;
  padding-top: unset;

  @media screen and (min-width: 1024px) {
    padding-top: 5rem;
  }
`;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding-left: 2rem;
  padding-right: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    width: 70%;
  }
`;

const Titulo = styled.h2`
  color: white;
  font-size: 2rem;
  margin: 0;
  font-family: 'Montserrat', sans-serif;
`;

const Skils = styled.p`
  font-size: 20px;
  color: #30d3f0;
  margin-right: 1rem;
`;

const DivTextoSobreMi = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  /* background-color: red; */
`;

const LetrasSobreMi = styled.p`
  color: white;
  font-family: 'Spartan', sans-serif;
  text-align: justify;
`;

const SobreMi = () => {
  const [skills, setsKills] = useState(true);

  const setSection = () => setsKills(!skills);

  return (
    <DivSupremo id="acerca-de">
      <Container>
        <div style={{ padding: '3rem' }}>
          <div className="personal-img" />
        </div>

        <DivTextoSobreMi>
          <Titulo>Sobre mi</Titulo>
          <LetrasSobreMi>
            Soy un desarrollador front-end de Jalisco, México. Últimamente me
            encuentro trabajando en React Native, y otras tecnologías
            desarrollando apliaciones y proyectos personales. Mi lenguaje
            favorito es Javascript pero tengo conocimientos en java y otros
            frameworks como vue así como también sé bases de datos sql y no sql.
          </LetrasSobreMi>

          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Skils>Skills</Skils>
            <Skils>Educación y Certificación</Skils>
          </div>

          <SkillsCertificados />
        </DivTextoSobreMi>
      </Container>
    </DivSupremo>
  );
};

export default SobreMi;
