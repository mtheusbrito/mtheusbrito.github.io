import React, { Component } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { Container } from './styles';
const Footer = props => {
    const barAnimation = useSpring({
        from: { transform: 'translate3d(0, 10rem, 0)' },
        transform: 'translate3d(0, 0, 0)',
    });

    return <Container style={barAnimation}>
            <p> Página em desenvolvimento...</p>
        </Container>;

}
export default Footer;
