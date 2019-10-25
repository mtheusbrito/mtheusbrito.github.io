import React from 'react';
import Home from './pages/Home';
import GlobalStyle from './styles/global';
import Sobre from './pages/Sobre';

function App() {
  return (
    <React.Fragment>
      <Home />
      {/* <Sobre/> */}
      <GlobalStyle />
    </React.Fragment>);
}

export default App;
