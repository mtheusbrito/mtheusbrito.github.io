import React, { Component } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { Container, FlexContainer, NavLinks, BurgerWrapper } from './styles';
import Brand from './../Brand';
import BurgerMenu from './../BurgerMenu';
import CollapseMenu from '../CollapseMenu';
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
                        <a href="/">Inicio</a>
                        <a href="/">Sobre</a>
                        <a href="/">Stack</a>
                        <a href="/">Projetos</a>
                        <a href="/">Contato</a>
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
