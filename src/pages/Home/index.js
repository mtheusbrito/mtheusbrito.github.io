import React, { Component } from 'react';
import Particles from 'react-particles-js';
import { Container, Button} from './styles';
import { FaAngleDown } from "react-icons/fa";

const partOptions = {
    particles: {
        number: {
            value: 50
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
            },
            // onresize: {
            //     enable: true,
            //     density_auto: true,
            //     density_area: 5 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
            //   }
        }
    }
}
export default class Header extends Component {
    render() {
        return (<Container>
            <Particles params={partOptions} className="particles"/>
            <section>
                <div data-aos="fade-right">
                <span>Matheus Brito</span>
                <br/>
                Full-stack web developer.
                </div>
             </section>

            <a data-aos="fade-left" href="#sobre">Mais informações</a>
            </Container>);
    }
}
