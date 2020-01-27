import React from 'react';
import { HashRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

import Header from './components/Header';
import Routes from './routes';
import GlobalStyle from './styles/global';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Header />
        <Routes />
        <GlobalStyle />
      </HashRouter>
    </Provider>
  );
}

export default App;
