import styled from 'styled-components';


export const Container = styled.section`
    color: #FFF;
    background: #252934;;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    justify-content:center;
    align-items:center;
    .particles{
        max-width: 100%;

    }
    > div{
    position:absolute;
    top:0;
    left:0;
    width: 100vw;
    height:100%;
   }

   section{
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;

    > div{
        @media screen and (min-width: 600px){
            font-size: 32pt;
            line-height:36pt;
        }
        margin: 0 0 20px 0;
        font-size: 16pt;
        line-height: 20pt;
        z-index: 1;
        pointer-events: none;
    }
    span{
        color: #00ff5f;
    }
   }
   a{
    text-decoration:none;
    color:#FFF;
    z-index:999;
    padding: 10px 20px;
    border: 2px solid #fff;
    box-sizing: inherit;
    display: inline-block;
    font-size: 13pt;
    transition: all .5s;
    cursor: pointer;
   }

`;

export const MessageFooter = styled.div`
position: fixed;
width:100%;
bottom:0;
z-index:2;
right:0;
/* left:0; */

`;
