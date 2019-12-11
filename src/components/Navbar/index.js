import React, { Component } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { Container, FlexContainer, NavLinks, BurgerWrapper } from './styles';
import Brand from './../Brand';
import BurgerMenu from './../BurgerMenu';
import CollapseMenu from '../CollapseMenu';
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Navbar = props => {
    const barAnimation = useSpring({
        from: { transform: 'translate3d(0, -10rem, 0)' },
        transform: 'translate3d(0, 0, 0)',
    });

    const linkAnimation = useSpring({
        from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
        to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
        delay: 800,
        config: config.wobbly,
    });

    return (
        <>
            <Container style={barAnimation}>
                <FlexContainer>
                    <Brand />
                    <NavLinks style={linkAnimation}>
                        <AnchorLink  href="/">Inicio</AnchorLink>
                        <AnchorLink   href="#sobre">Sobre</AnchorLink>
                        <AnchorLink   href="#stack">Stack</AnchorLink>
                        <AnchorLink  href="#projetos">Projetos</AnchorLink>
                        <AnchorLink  href="#contato">Contato</AnchorLink>
                    </NavLinks>
                    <BurgerWrapper>
                        <BurgerMenu
                            navbarState={props.navbarState}
                            handleNavbar={props.handleNavbar}
                        />
                    </BurgerWrapper>
                </FlexContainer>
            </Container>
            <CollapseMenu
                navbarState={props.navbarState}
                handleNavbar={props.handleNavbar}
            />
        </>
    );
};

export default Navbar;
