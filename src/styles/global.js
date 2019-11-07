import { createGlobalStyle } from 'styled-components'
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
body{
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;

}

body, input, button{
    font-family: 'Noto Sans', sans-serif;
    font-size: 16px;
}
`;
