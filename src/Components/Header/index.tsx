import React from 'react';

import { HeaderContainer } from './styles';
import { NavLink } from 'react-router-dom';
const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <nav>
        <NavLink to="/" title="Ínicio">
          Ínicio
        </NavLink>
        <NavLink to="/about" title="Sobre">
          Sobre
        </NavLink>
        <NavLink to="/curriculum" title="Curriculo">
          Curriculo
        </NavLink>
        <NavLink to="/projects" title="Projetos">
          Projetos
        </NavLink>
        <NavLink to="/contact" title="Contato">
          Contato
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}

export default Header;