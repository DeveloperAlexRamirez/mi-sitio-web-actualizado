import Image from 'next/image';
import styled from '@emotion/styled';

const ContainerText = styled.div`
  position: absolute;
  background-color: #191919;
  border-radius: 0 10px 10px 0;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  /* margin: 0 auto; */
  font-family: 'Poppins', sans-serif;
  /* padding-bottom: 7rem; */
  padding-left: 3rem;
  line-height: 12px;
  font-size: 0.9rem;

  @media (min-width: 660px) {
    align-items: center;
    font-size: 5rem;
    width: 60%;
    padding-left: 5rem;
  }

  @media (min-width: 1280px) {
    line-height: 22px;
    font-size: 2.5rem;
    width: 40%;
    padding-left: 5rem;
    align-items: center;
  }
`;

const textoPrincipal = `\n</Frontend developer>`;
const textoSecundario = `<Mobile developer />`;

const BannerImg = () => {
  return (
    <div className="imgBanner">
      <ContainerText>
        <p className="write-h1" style={{ margin: 0 }}>
          Hola, soy Alex.
        </p>
        <p className="subtitle">{textoPrincipal}</p>
      </ContainerText>
    </div>
  );
};

export default BannerImg;
