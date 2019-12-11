import React from 'react';
import styled from 'styled-components';
import {CollapseWrapper, NavLinks} from './styles';
import { useSpring, animated } from 'react-spring';
import AnchorLink from 'react-anchor-link-smooth-scroll'
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
            <li><AnchorLink href="#" onClick={props.handleNavbar}>Inicio</AnchorLink></li>
            <li><AnchorLink href="#sobre" onClick={props.handleNavbar}>Sobre</AnchorLink></li>
            <li><AnchorLink href="#stack" onClick={props.handleNavbar}>Stack</AnchorLink></li>
            <li><AnchorLink href="#stack" onClick={props.handleNavbar}>Projetos</AnchorLink></li>
            <li><AnchorLink href="#stack" onClick={props.handleNavbar}>Contato</AnchorLink></li>
          </NavLinks>
        </CollapseWrapper>
      );
    }
    return null;
  };

  export default CollapseMenu;
