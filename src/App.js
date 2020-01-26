import React from 'react';

import { HashRouter } from 'react-router-dom';

import Header from './components/Header';
import Routes from './routes';

import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Routes />
        <GlobalStyle />
      </HashRouter>
    </>
  );
}

export default App;
