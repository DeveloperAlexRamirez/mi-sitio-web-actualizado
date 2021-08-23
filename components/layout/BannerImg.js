import Image from 'next/image';
import styled from '@emotion/styled';

const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  /* margin: 0 auto; */
  font-family: 'Poppins', sans-serif;
  /* padding-bottom: 7rem; */
  padding-left: 0rem;
  line-height: 12px;
  font-size: 1rem;

  @media (min-width: 660px) {
    font-size: 1.5rem;

    padding-left: 10rem;
    width: 80%;
  }

  @media (min-width: 1280px) {
    line-height: 22px;
    font-size: 2.5rem;
    align-items: flex-start;
  }
`;

const textoPrincipal = `\n</Web developer>`;
const textoSecundario = `<Mobile developer />`;

const BannerImg = () => {
  return (
    <div className="imgBanner">
      <ContainerText>
        <h1 style={{ color: 'white', margin: 0 }}>Hola, soy Alex</h1>
        <h1 className="typing-demo textoPrincipal">{textoPrincipal}</h1>
      </ContainerText>
    </div>
  );
};

export default BannerImg;
