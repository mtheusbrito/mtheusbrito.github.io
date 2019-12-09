import styled from 'styled-components';

export const Container = styled.section`
    min-height: 100vh;
    /* background: #252934; */
    /* color: #fff; */
    input,
    textarea,
    button {
        border-radius: 0;
    }
    #titulo {
        font-weight: bold;
        font-size: 2.6rem;
        padding: 3rem 3rem 0 3rem;
        position: relative;
        /* color: #252934; */
        text-transform: uppercase;
    }
    #titulo::after {
        position: absolute;
        content: '';
        margin-left: 3%;
        height: 6px;
        bottom: -4px;
        /* margin: 0 auto; */
        left: 0;
        right: 0;
        width: 50%;
        background: #00ff5f;
        -o-transition: 0.5s;
        -ms-transition: 0.5s;
        -moz-transition: 0.5s;
        -webkit-transition: 0.5s;
        -webkit-transition: 0.5s;
        transition: 0.5s;

        @media (max-width: 768px) {
        width: 70%;
        margin-left: 12%;

    }
    }

    #content {
        padding: 2rem;
    }

    .card-projetos{
        background: #252934;
    }
    .img-projetos{
        max-width: 380px;
        max-height: 180px;
        min-height:180px;
    }
`;
