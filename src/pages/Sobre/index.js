import React, { Component } from 'react';
import avatar from './../../assets/new.jpg';
import { Container } from './styles';

import {
    FaGithub,
    FaBitbucket,
    FaLinkedin,
    FaFacebookF,
    FaInstagram,
} from 'react-icons/fa';

export default class Sobre extends Component {
    render() {
        return (
            <Container id="sobre">
                <h1 id="titulo" data-aos="fade-right">Sobre</h1>
                <div id="content">
                    <div id="avatar" >
                        <img src={avatar}  className="rounded-circle"/>
                    </div>
                    <div id="apresentacao" className="mt-5">
                        <p>
                            Graduado em Sistemas de Informação pela <a target="_blank" href="www.redentor.edu.br/"><b>UniRedentor</b></a> em 2018. <br></br>Tenho grande
                            interesse na resolução de problemas cotidianos através da tecnologia, sou um
                            programador determinado e estudioso, além da
                            versatilidade de ferramentas, apresento constância
                            nas ideias e busco sempre ajudar o próximo.
                        </p>

                        <div id="sociais">
                            <ul>
                                <li>
                                    <a
                                        href="https://github.com/mtheusbrito"
                                        target="_blank"
                                    >
                                        <FaGithub size={22} />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://bitbucket.org/%7B8dd1c2b5-3fec-4603-89d2-809adc5e264b%7D/"
                                        target="_blank"
                                    >
                                        <FaBitbucket size={22} />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.instagram.com/mtheusbrito/"
                                        target="_blank"
                                    >
                                        <FaInstagram size={22} />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.facebook.com/mtheus96"
                                        target="_blank"
                                    >
                                        <FaFacebookF size={22} />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/matheus-brito-6ab645a1"
                                        target="_blank"
                                    >
                                        <FaLinkedin size={22} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        );
    }
}
