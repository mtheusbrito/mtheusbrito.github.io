import styled from 'styled-components';

export const Container = styled.section`
    min-height: 100vh;
    background: #252934;
    color: #fff!important;
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
        width: 20%;
        background: #00ff5f;
        -o-transition: 0.5s;
        -ms-transition: 0.5s;
        -moz-transition: 0.5s;
        -webkit-transition: 0.5s;
        -webkit-transition: 0.5s;
        transition: 0.5s;

        @media (max-width: 768px) {
        width: 48%;
        margin-left: 12%;

    }
    }
    .col-form{
        @media  (max-width: 768px) {
            order: -1!important;
        }
    }

    #content {
        padding: 2rem;
    }

    .button-form {
        background: #00ff5f;
        font-weight: bold !important;
        border-color: transparent !important;
    }
    .button-form::placeholder {
        background: #00ff5f !important;
    }
    .form-control:focus {
        border-color: transparent !important;
        box-shadow: none !important;
    }
    .iframe-resp {
        width: 100%;
        height: 50%;
        border: 0px;
    }
    #localizacao{
        display:block;
        margin-top: 2rem!important;
    }
    .link-contato{
        color:#fff!important;
    }
    .link-contato:hover{
        color:#00ff5f!important;
        text-decoration:none!important;
    }
`;
