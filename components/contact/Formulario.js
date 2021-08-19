import styled from '@emotion/styled';
import { useState } from 'react';
import { Title } from '../services/MisServicios';

const ContainerSupremo = styled.div`
  margin: 4rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
`;

const CustomTitle = styled(Title)`
  text-align: left;
`;

const Subtitulo = styled.p`
  font-family: 'Spartan', sans-serif;
  font-size: 0.9rem;
  color: white;
  line-height: 20px;
`;

const ContainerSubtitulo = styled.div`
  max-width: 600px;
`;

const ContenedorForm = styled.div`
  padding: 1rem;
  border-top: unset;
  transition: 700ms;
`;

const CamposContact = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding-top: 1rem;
  width: 70%;

  @media screen and (min-width: 1024px) {
    width: 40%;
  }
`;

const Input = styled.input`
  padding: 0.8rem;
  //   border: none;
  box-shadow: none;
  font-weight: 300;
  border: 1px solid white;
  border-color: #ada7a7;
  background-color: transparent;
  border-radius: 3px;
  font-family: 'Montserrat', sans-serif;
  color: white;

  :focus {
    outline: none;
  }
`;

const Textarea = styled.textarea`
  padding: 0.8rem;
  //   border: none;
  box-shadow: none;
  font-weight: 300;
  border: 1px solid white;
  background-color: transparent;
  border-radius: 3px;
  font-family: 'Montserrat', sans-serif;
  color: white;

  :focus {
    outline: none;
  }
`;

const Button = styled.input`
  color: white;
  margin-top: 2rem;
  border-radius: 5px;
  padding: 0.7rem 1.2rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 0.8rem;
  transition: 300ms;
  border: 1px solid white;
  text-transform: uppercase;
  background-color: #30d3f0;
  border: 1px solid #30d3f0;

  :hover {
    color: #30d3f0;
    background-color: transparent;
    cursor: pointer;
    transform: translateY(-3px);
  }
`;

const Formulario = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    interest: '',
    details: '',
  });

  const { name, email, interest, details } = values;

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (isValid()) {
      console.log('Send form...');
    }
  };

  const isValid = () => {
    if (
      name.trim().length === 0 ||
      category.trim().length === 0 ||
      interest.trim().length === 0 ||
      details.trim().length === 0
    ) {
      console.log('Todos los campos son obligatorios');
      return false;
    } else if (!validator.isEmail(email)) {
      console.log('Email not valid');
      return false;
    }
    return true;
  };

  return (
    <ContainerSupremo id="contacto">
      <Container>
        <CustomTitle>Contáctame</CustomTitle>
        <ContainerSubtitulo>
          <Subtitulo>
            Estoy disponible para trabajar como freelancer. Conéctate conmigo
            por correo electrónico: prueba@prueba.com o por WhatsApp:
            (322)-129-2482
          </Subtitulo>
        </ContainerSubtitulo>

        <ContenedorForm>
          <form className="form__contact" onSubmit={handleSend}>
            <CamposContact>
              {/* <Label>Name</Label> */}
              <Input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                placeholder="Tu nombre"
              />
            </CamposContact>
            <CamposContact>
              {/* <Label>Email</Label> */}
              <Input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Email"
              />
            </CamposContact>

            <CamposContact>
              {/* <Label>Your interest</Label> */}
              <Input
                type="interest"
                name="interest"
                value={interest}
                onChange={handleChange}
                placeholder="Proyecto"
              />
            </CamposContact>

            <CamposContact>
              {/* <Label>Additional details</Label> */}
              <Textarea
                name="details"
                value={details}
                onChange={handleChange}
                placeholder="Tu mensaje"
              ></Textarea>
              <div className="contenedor-submit">
                <Button type="submit" value="Enviar" />
              </div>
            </CamposContact>
          </form>
        </ContenedorForm>
      </Container>
    </ContainerSupremo>
  );
};

export default Formulario;
