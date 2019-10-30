import React from 'react';
import styled from 'styled-components';
import {CollapseWrapper, NavLinks} from './styles';
import { useSpring, animated } from 'react-spring';
const CollapseMenu = (props) => {
    const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

    if (props.navbarState === true) {
      return (
        <CollapseWrapper style={{
          transform: open.interpolate({
            range: [0, 0.2, 0.3, 1],
            output: [0, -20, 0, -200],
          }).interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
        }}
        >
          <NavLinks>
            <li><a href="/" onClick={props.handleNavbar}>Inicio</a></li>
            <li><a href="/" onClick={props.handleNavbar}>Sobre</a></li>
            <li><a href="/" onClick={props.handleNavbar}>Stack</a></li>
            <li><a href="/" onClick={props.handleNavbar}>Projetos</a></li>
            <li><a href="/" onClick={props.handleNavbar}>Contato</a></li>
          </NavLinks>
        </CollapseWrapper>
      );
    }
    return null;
  };

  export default CollapseMenu;
