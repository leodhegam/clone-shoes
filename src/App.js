import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import './config/reactotron';
import GlobalStyle from './styles/global';
import Navbar from './components/pages/NavBar';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
}
