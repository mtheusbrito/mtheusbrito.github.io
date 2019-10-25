import React, { Component } from 'react';
import Particles from 'react-particles-js';
import { Container, Button} from './styles';
import { FaAngleDown } from "react-icons/fa";

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
            <Particles params={partOptions}/>
            <section>
                <div >
                <span>Matheus Brito</span>
                <br/>
                Full-stack web developer.
                </div>
             </section>

            <a href="#">Mais informações</a>
            </Container>);
    }
}
