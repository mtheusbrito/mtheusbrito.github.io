import styled from 'styled-components';

export const Container = styled.section`
    min-height: 100vh;

    #titulo{
    font-weight: bold;
    font-size: 2.6rem;
    padding: 3rem 3rem 0 3rem;
    position: relative;
    color: #252934;
    text-transform: uppercase;
    }
    #titulo::after{

    position: absolute;
    content: '';
    margin-left: 3%;
    height: 6px;
    bottom: -4px;
    /* margin: 0 auto; */
    left: 0;
    right: 0;
    width: 15%;
    background: #00ff5f;
    -o-transition: .5s;
    -ms-transition: .5s;
    -moz-transition: .5s;
    -webkit-transition: .5s;
    -webkit-transition: .5s;
    transition: .5s;

    @media (max-width: 768px) {
        width: 36%;
        margin-left: 12%;

    }
    }
    #content {
        padding: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        /* color: #161b3d;
    background: #fff;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    max-width: 1100px;
    margin: 0 auto;
    padding: 30px;
    height: 100vh; */
        #avatar {
            padding: 20px;
            > img {
                transform: rotate(90deg);
                border-radius: 50%;
                width: 150px;
                height: 150px;
            }
        }
        #apresentacao {
            padding: 20px;
            align-self: center;
            p {
                text-align: center;
                font-size: 19px;
                line-height: 38px;
                >a{
                    color:#00ff5f!important;
                }

                @media (max-width: 768px) {
                    font-size: 15px;
                    line-height: 24px;
                }
            }
            #sociais > ul {
                margin: 10px 0;
                display: flex;
                align-items: center;
                justify-content: center;
                li {
                    list-style: none;
                    margin-right: 10px;
                    > a {
                        > svg {
                            color: #161b3d !important;
                        }
                        > svg:hover {
                            color: #00ff5f !important;
                            transition-delay: 0.1s;
                        }
                    }
                }
            }
        }
    }
`;
