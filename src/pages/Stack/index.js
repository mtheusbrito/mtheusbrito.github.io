import React from 'react';

import { Container } from './styles';

export default class Stack extends React.Component {
    render() {
        return (
            <Container id="stack">
                <h1 id="titulo">Stack</h1>
                <div id="content"></div>
            </Container>
        );
    }
}
