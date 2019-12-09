import React from 'react';

import { Container } from './styles';
import { Col, Row, Card, CardImg } from 'reactstrap';
export default class Projetos extends React.Component {
    render() {
        return (
            <Container id="projetos">
                <h1 id="titulo" data-aos="fade-right">Projetos contribuintes </h1>
                <div id="content">
                    <Row>
                        <Col md="4" className="mt-4" data-aos="zoom-in">
                            <a href="http://www.redentor.edu.br/" target="_blank" alt="Site insticional UniRedentor" title="Site insticional UniRedentor">

                                <Card className="card-projetos shadow">
                                    <CardImg
                                        top
                                        className="img-projetos p-4"
                                        src="http://redentor.edu.br/files/marca-uniredentor-hor-03_31072019164845.png"
                                        alt="Site instucional UniRedentor"
                                    />
                                </Card>
                            </a>
                        </Col>

                        <Col md="4" className="mt-4" data-aos="zoom-in">
                        <a href="http://www.cic.redentor.edu.br/" target="_blank" alt="12º Congresso de iniciação cientifica" title="12º Congresso de iniciação cientifica">
                            <Card className="card-projetos shadow">
                                <CardImg
                                    top
                                    className="img-projetos p-4"
                                    src="http://redentor.edu.br/files/front-h_19082019081536.png"
                                    alt="12º Congresso de iniciação cientifica"
                                />
                            </Card>
                            </a>
                        </Col>
                        <Col md="4" className="mt-4" data-aos="zoom-in">
                        <a href="http://redentor.edu.br/desafioesolucoes" target="_blank" alt="Para grandes desafios uma grande solução" title="Para grandes desafios uma grande solução">
                            <Card className="card-projetos shadow">
                                <CardImg
                                    top
                                    className="img-projetos p-4"
                                    src="http://redentor.edu.br/files/logo_01082019085324.png"
                                    alt="Para grandes desafios uma grande solução"
                                />
                            </Card>
                            </a>
                        </Col>
                        <Col md="4" className="mt-4" data-aos="zoom-in">
                        <a href="http://redentor.edu.br/capeia" target="_blank" alt="CAPEIA - Instituto de Pesquisa Educação e Saúde" title="CAPEIA - Instituto de Pesquisa Educação e Saúde">
                            <Card className="card-projetos shadow">
                                <CardImg
                                    top
                                    className="img-projetos p-4"
                                    src="http://www.redentor.edu.br/files/__0001s_0006_camada59@2x_04122019142951.png"
                                    alt="CAPEIA - Instituto de Pesquisa Educação e Saúde"
                                />
                            </Card>
                            </a>
                        </Col>
                    </Row>
                </div>
            </Container>
        );
    }
}
