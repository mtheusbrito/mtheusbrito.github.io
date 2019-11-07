import styled from 'styled-components';

export const Container = styled.section`
 color: #161b3d;
    background: #fff;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    max-width: 1100px;
    margin: 0 auto;
    padding: 30px;
    height: 100vh;
    display: flex;

    #avatar {
        margin-bottom: 20px;

        > img {
            transform: rotate(90deg);
            border-radius: 50%;
            width:200px;
            height: 200px;
        }
    }
    #apresentacao {
        p{
            font-size: 19px;
            line-height: 38px;
        }
    }
`;
