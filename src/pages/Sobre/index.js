import React, { Component } from 'react';
import avatar from './../../assets/avatar.JPG';
import { Container } from './styles';

export default class Sobre extends Component {
    render() {
        return (
            <Container id="sobre">
                <div id="avatar">
                    <img src={avatar} />
                </div>
                <div id="apresentacao">
                    <p>
                        Mussum Ipsum, cacilds vidis litro abertis. Manduma
                        pindureta quium dia nois paga. Em pé sem cair, deitado
                        sem dormir, sentado sem cochilar e fazendo pose. Viva
                        Forevis aptent taciti sociosqu ad litora torquent.
                        Cevadis im ampola pa arma uma pindureta.
                    </p>
                </div>
            </Container>
        );
    }
}
