import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { BrowserRouter } from 'react-router-dom';
import Router from './Components/Router';
import { GlobalStyle } from './styles/global';
import { QueryClient, QueryClientProvider } from 'react-query';
import { queryClient } from './services/queryClient';
// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter basename="/">
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
