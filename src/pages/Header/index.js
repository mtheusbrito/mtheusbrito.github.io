import React, { Component } from 'react';
import Particles from 'react-particles-js';
import { Container } from './styles';

const partOptions = {
    particles: {
        number: {
            value: 100
        },
        size: {
            value: 3
        }
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            }
        }
    }
}
export default class Header extends Component {
    render() {
        return (<Container>
            <Particles params={partOptions} />
        </Container>);
    }
}
