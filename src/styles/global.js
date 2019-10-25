import { createGlobalStyle } from 'styled-components'
export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}
body > #root {
  height: 100vh;
}
body{
    -webkit-font-smoothing: antialiased;

}

body, input, button{
    font: 16px Roboto, sans-serif;
}
`;
