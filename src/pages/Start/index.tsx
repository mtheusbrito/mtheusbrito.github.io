import React from 'react';
import { Container, Content, Footer } from './styles';
import { NavLink} from 'react-router-dom'
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp, FaFacebook, FaArrowRight } from 'react-icons/fa'
const Start: React.FC = () => {
  return (
    <Container>
      <Content>
        <span className="hello">
          Olá! <br />
          <b>sou Matheus Brito</b>
        </span>

        <div>
          Full Stack Web Developer
          <span>
            Mussum Ipsum, cacilds vidis litro abertis. Todo mundo vê os porris
            que eu tomo, mas ninguém vê os tombis que eu levo!
          </span>
          <NavLink to="/about" title="Saiba mais">
            Um pouco sobre mim  <FaArrowRight/>
          </NavLink>
        </div>
      </Content>

      <Footer>
        <NavLink to="/about" title="GitHub">
          <FaGithub size={26} />
        </NavLink>

        <NavLink to="/about" title="Linkedin">
          <FaLinkedin size={26} />
        </NavLink>

        <NavLink to="/about" title="Instagram">
          <FaInstagram size={26} />
        </NavLink>
        <NavLink to="/about" title="Whatsapp">
          <FaWhatsapp size={26} />
        </NavLink>

        <NavLink to="/about" title="Facebook">
          <FaFacebook size={26} />
        </NavLink>
      </Footer>
    </Container>
  );
}

export default Start;