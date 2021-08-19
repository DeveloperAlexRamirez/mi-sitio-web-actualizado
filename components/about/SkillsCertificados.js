import styled from '@emotion/styled';
import React from 'react';

const ContainerTexto = styled.p`
  font-family: 'Spartan', sans-serif;
`;

const SkillsCertificados = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <p style={{ color: 'white', margin: 0 }}>
        <b>Diseño web e interfaz de usuario</b> - Desarrollo sitios web.
      </p>
      <p style={{ color: 'white' }}>
        <b>Aplicaciones Android</b> - Desarrollo aplicaciones nativas con React
        Native.
      </p>
      <p style={{ color: 'white', margin: 0 }}>
        <b>Creación de API rest</b> - Creación y consumo de API’s rest hechas
        con node, express, mongoose, etc.
      </p>
    </div>
  );
};

export default SkillsCertificados;
