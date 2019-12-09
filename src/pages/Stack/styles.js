import styled from 'styled-components';

export const Container = styled.section`
    /* min-width: 100%!important; */
    width: 100%;
    background: #252934;
    color: #fff;
    display: flex;
    canvas{
        /* width:100vw!important; */
        height:300vh!important;
        /* display:block; */
    }

    > div {
        position: absolute;

    }
    section {
        display: flex;
        flex-direction: column;

        >#titulo {
            font-weight: bold;
            font-size: 2.6rem;
            padding: 3rem 3rem 0 3rem;
            position: relative;
            /* color: #252934; */
            text-transform: uppercase;
            @media (max-width:768px) {
            font-size: 1.8rem;
            }
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
                width: 36%;
                margin-left: 12%;
            }
        }
        #content {
            padding: 2rem;
            max-width:100vw!important;
            /* max-width:100vw!important; */
        }
        input,
        textarea,
        button {
            border-radius: 0;
        }



        .link-stack {
            transition: 0.2s;
            @media (max-width: 768px) {
                width: 90px;
                height: 90px;
            }
        }
        .link-stack:hover {
            color: #00ff5f !important;
            background: #252934 !important;
        }
    }
`;
