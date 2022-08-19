import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { BrowserRouter } from 'react-router-dom';
import Router from './Components/Router';
import { GlobalStyle } from './styles/global';
// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter basename={`/`}>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
