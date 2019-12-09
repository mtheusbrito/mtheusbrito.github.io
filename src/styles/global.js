import { createGlobalStyle } from 'styled-components';
export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Noto+Sans&display=swap');


*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}
body > #root {
  height: 100vh;
  background: #252934;

}
a:hover{
    text-decoration:none!important;
    color:#00ff5f!important;
}
body{
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;




}

body, input, button{
    font-family: 'Noto Sans', sans-serif;
    font-size: 16px;
}

#root{
    >section{
        >#titulo{
            @media (max-width:768px) {
            font-size: 1.8rem;
            }
        }
    }


}

.particles{
       width:100%!important;
       /* height: 100%!important; */
   }

`;
