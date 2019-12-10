import React from 'react';

import { Container } from './styles';
import { Col, Row} from 'reactstrap';
import Particles from 'react-particles-js';
import {DiJava, DiJavascript1, DiNodejs, DiHtml5, DiCss3, DiAndroid, DiMysql,DiFirebase, DiEclipse, DiBootstrap, DiGit, DiLinux, DiSqllite} from 'react-icons/di';
const partOptions = {

    particles: {
        number: {
            value: 160,
            density: {
                enable: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                speed: 4,
                // size_min: 0.3
            }
        },
        line_linked: {
            enable: false
        },
        move: {
            random: true,
            speed: 1,
            direction: "top",
            out_mode: "out"
        }
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: "bubble"
            },
            onclick: {
                enable: true,
                mode: "repulse"
            }
        },
        modes: {
            bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0
            },
            repulse: {
                distance: 400,
                duration: 4
            }
        }
    }
};
export default class Stack extends React.Component {
    render() {
        return (
                <Container id="stack">
                <Particles params={partOptions} id="particles-js" className="particles"/>
                <section>
                    <h1 id="titulo" data-aos="fade-right">Stack</h1>
                    <div id="content">
                        <Row className="p-4 text-center mt-5 row-projetos">
                            <Col xs="6" sm="4" className="mb-5" data-aos="zoom-out-up">
                                <a href="https://www.java.com/pt_BR/"  target="_blank" title="Java"><DiJava size={130} color="#212529" className="link-stack bd-placeholder-img rounded-circle bg-white p-3"></DiJava></a>
                            <p className="mt-2 text-uppercase font-weight-bold">Java</p>
                            </Col>
                            <Col xs="6" sm="4" className="mb-5" data-aos="zoom-out-up">
                                <a href="https://developer.mozilla.org/pt-BR/docs/Aprender/JavaScript"  target="_blank" title="JavaScript"><DiJavascript1 size={130} color="#212529" className="link-stack bd-placeholder-img rounded-circle bg-white p-3"></DiJavascript1></a>
                                <p className="mt-2 text-uppercase font-weight-bold">Javascript </p>
                                </Col>
                            <Col xs="6" sm="4" className="mb-5" data-aos="zoom-out-up">
                                <a href="https://nodejs.org/en/"  target="_blank" title="NodeJs"><DiNodejs size={130} color="#212529" className="link-stack -placeholder-img rounded-circle bg-white p-3"></DiNodejs></a>
                                <p className="mt-2 text-uppercase font-weight-bold">NodeJS</p>
                                </Col>
                            <Col xs="6" sm="4" className="mb-5" data-aos="zoom-out-up"><a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML/HTML5"  target="_blank" title="Html5"><DiHtml5 size={130} color="#212529" className="link-stack bd-placeholder-img rounded-circle bg-white p-3"></DiHtml5></a>
                            <p className="mt-2 text-uppercase font-weight-bold text-center">HTML5</p>
                            </Col>
                            <Col xs="6" sm="4" className="mb-5" data-aos="zoom-out-up">
                                <a href="https://developer.mozilla.org/pt-BR/docs/Archive/CSS3"  target="_blank" title="Css3"><DiCss3 size={130} color="#212529" className="link-stack bd-placeholder-img rounded-circle bg-white p-3"></DiCss3></a>
                                <p className="mt-2 text-uppercase font-weight-bold">CSS3</p>
                                </Col>
                            <Col xs="6" sm="4" className="mb-5" data-aos="zoom-out-up">
                                <a href="https://getbootstrap.com/"  target="_blank" title="Bootstrap"><DiBootstrap size={130} color="#212529" className="link-stack bd-placeholder-img rounded-circle bg-white p-3"></DiBootstrap></a>
                                <p className="mt-2 text-uppercase font-weight-bold">Bootstrap</p>
                                </Col>
                            <Col xs="6" sm="4" className="mb-5" data-aos="zoom-out-up">
                                <a href="https://developer.android.com/studio/?gclid=Cj0KCQiA_rfvBRCPARIsANlV66OIzdWSlmIvBO_B4DgO6gx1W4hu7K6Y4nnanb2KOgw2gn-BpSkcCSoaAtjjEALw_wcB"  target="_blank" title="Android"><DiAndroid size={130} color="#212529" className="link-stack bd-placeholder-img rounded-circle bg-white p-3"></DiAndroid></a>
                                <p className="mt-2 text-uppercase font-weight-bold">Android</p>
                                </Col>
                            <Col xs="6" sm="4" className="mb-5" data-aos="zoom-out-up">
                                <a href="https://www.mysql.com/https://www.java.com/pt_BR/"  target="_blank" title="Mysql"><DiMysql size={130} color="#212529" className="link-stack bd-placeholder-img rounded-circle bg-white p-3"></DiMysql></a>
                                <p className="mt-2 text-uppercase font-weight-bold">MySQL</p>
                                </Col>
                            <Col xs="6" sm="4" className="mb-5" data-aos="zoom-out-up">
                                <a href="https://www.sqlite.org/index.html"  target="_blank" title="Sqllite"><DiSqllite size={130} color="#212529" className="link-stack bd-placeholder-img rounded-circle bg-white p-3"></DiSqllite></a>
                                <p className="mt-2 text-uppercase font-weight-bold">SQLLite</p>
                                </Col>
                            <Col xs="6" sm="4" className="mb-5" data-aos="zoom-out-up">
                                <a href="https://firebase.google.com/"  target="_blank" title="Firebase"><DiFirebase size={130} color="#212529" className="link-stack bd-placeholder-img rounded-circle bg-white p-3"></DiFirebase></a>
                                <p className="mt-2 text-uppercase font-weight-bold">Firebase</p>
                                </Col>
                            <Col xs="6" sm="4" className="mb-5" data-aos="zoom-out-up">
                                <a href="https://www.eclipse.org/"  target="_blank" title="Eclipse"><DiEclipse size={130} color="#212529" className="link-stack bd-placeholder-img rounded-circle bg-white p-3"></DiEclipse></a>
                                <p className="mt-2 text-uppercase font-weight-bold">Eclipse IDE</p>
                                </Col>
                            <Col xs="6" sm="4" className="mb-5" data-aos="zoom-out-up"><a href="https://git-scm.com/"  target="_blank" title="Git"><DiGit size={130} color="#212529" className="link-stack bd-placeholder-img rounded-circle bg-white p-3"></DiGit></a>
                            <p className="mt-2 text-uppercase font-weight-bold">GIT</p>
                            </Col>
                            <Col xs="6" sm="4" className="mb-5" data-aos="zoom-out-up">
                                <a href="https://www.4linux.com.br/o-que-e-linux"  target="_blank" title="Linux"><DiLinux size={130} color="#212529" className="link-stack bd-placeholder-img rounded-circle bg-white p-3"></DiLinux></a>
                                <p className="mt-2 text-uppercase font-weight-bold">Linux</p>
                                </Col>
                        </Row>
                    </div>
                </section>


            </Container>



        );
    }
}
