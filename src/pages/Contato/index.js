import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from './styles';
import { FaWhatsapp, FaMapMarkerAlt, FaCity, FaEnvelope } from 'react-icons/fa';
import * as emailjs from 'emailjs-com';
import SweetAlert from 'sweetalert2-react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


import {
    Button,
    FormFeedback,
    Form,
    FormGroup,
    Label,
    Input,
    Col,
    Row,
} from 'reactstrap';
const MySwal = withReactContent(Swal);
export default class Contato extends React.Component {
    state = {
        show: false,
        name: '',
        email: '',
        subject: '',
        message: '',
    };

    handleSubmit(e) {
        e.preventDefault();
        const { name, email, subject, message } = this.state;

        let templateParams = {
            from_name: email,
            to_name: 'gmail',
            subject: subject,
            message_html:
                'Nome: ' +
                name +
                '\n' +
                'Assunto: ' +
                subject +
                '\n' +
                'Mensagem: ' +
                message,
        };
        emailjs.send(
            'gmail',
            'template_eBCiFr79',
            templateParams,
            'user_uMY3fwf4dMtQbL7TZFHnN'
        );

        this.resetForm();
        MySwal.fire(
            'Sucesso!',
            'Recebi sua mensagem, assim que possível te responderei!',
            'success'
          )
    }
    resetForm() {
        this.setState({
            show: true,
            name: '',
            email: '',
            subject: '',
            message: '',
        });
    }
    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value });
    };

    render() {
        return (
            <Container id="contato">

                <h1 id="titulo">Contato</h1>
                <div id="content">
                    <p className="lead">
                        Fique a vontade para me mandar uma mensagem sobre
                        trabalhos ou projetos, ou até mesmo um oi 👋 !
                    </p>
                    <Row className="pt-3">
                        <Col md="8" className="col-form">
                            <Form onSubmit={this.handleSubmit.bind(this)}>
                                <FormGroup controlId="formBasicName">
                                    <Label className="text-white">
                                        Nome completo
                                    </Label>
                                    <Input
                                        type="text"
                                        required
                                        name="name"
                                        value={this.state.name}
                                        className="text-dark"
                                        onChange={this.handleChange.bind(
                                            this,
                                            'name'
                                        )}
                                        placeholder="Seu nome completo"
                                    />
                                </FormGroup>
                                <FormGroup controlId="formBasicEmail">
                                    <Label className="text-white">Email</Label>
                                    <Input
                                        required
                                        type="email"
                                        name="email"
                                        value={this.state.email}
                                        className="text-dark"
                                        onChange={this.handleChange.bind(
                                            this,
                                            'email'
                                        )}
                                        placeholder="exemplo@email.com"
                                    />
                                    <FormFeedback>
                                        You will not be able to see this
                                    </FormFeedback>
                                </FormGroup>

                                <FormGroup controlId="formBasicSubject">
                                    <Label className="text-white">
                                        Qual seu problema?
                                    </Label>
                                    <Input
                                        required
                                        type="text"
                                        name="subject"
                                        className="text-dark"
                                        value={this.state.subject}
                                        onChange={this.handleChange.bind(
                                            this,
                                            'subject'
                                        )}
                                        placeholder="Ex: Preciso de um software para minha empresa"
                                    />
                                </FormGroup>
                                <FormGroup controlId="formBasicMessage">
                                    <Label className="text-white">
                                        Descreva aqui o seu problema,
                                        encontrarei uma solução!
                                    </Label>
                                    <Input
                                        type="textarea"
                                        name="message"
                                        required
                                        className="text-dark"
                                        value={this.state.message}
                                        placeholder="Descreva aqui... "
                                        onChange={this.handleChange.bind(
                                            this,
                                            'message'
                                        )}
                                    />
                                </FormGroup>
                                <Button
                                    variant="primary"
                                    className="button-form"
                                    type="submit"
                                >
                                    Enviar
                                </Button>
                            </Form>
                        </Col>
                        <Col md="4">
                            <div id="localizacao">
                                <iframe
                                    src="https://maps.google.com.br/maps?q=-21.201065-41.894854&output=embed&dg=oo"
                                    className="iframe-resp"
                                ></iframe>
                                <ul className="list-unstyled p-2">
                                    <li>
                                        <p className="mb-0">
                                            <FaWhatsapp
                                                size={16}
                                                className="mr-3"
                                            ></FaWhatsapp>
                                            <strong>
                                                <a
                                                    className="link-contato"
                                                    href="https://wa.me/5522999979775?text=sua%20mensagem"
                                                >
                                                    (22) 999979775
                                                </a>
                                            </strong>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="mb-0">
                                            <FaEnvelope
                                                size={16}
                                                className="mr-3"
                                            ></FaEnvelope>
                                            <strong>
                                                <a
                                                    className="link-contato"
                                                    href="mailto:matheusbritodasilva@gmail.com"
                                                >
                                                    matheusbritodasilva@gmail.com
                                                </a>
                                            </strong>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="mb-0">
                                            <FaMapMarkerAlt
                                                size={16}
                                                className="mr-3"
                                            ></FaMapMarkerAlt>
                                            <strong>
                                                Avenida Zulamith Bittencourt n°:
                                                244. Cond. São José, Apt:101 -
                                                Centro.
                                            </strong>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="mb-0">
                                            <FaCity
                                                size={16}
                                                className="mr-3"
                                            ></FaCity>
                                            <strong>
                                                Itaperuna - RJ, 28300-000.
                                            </strong>{' '}
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        );
    }
}
