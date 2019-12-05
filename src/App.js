import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';
import { Provider } from 'react-redux';
import Navbar from './components/pages/NavBar';
import store from './store';
export default function App() {
  return (
    <Provider store={store}>

    <BrowserRouter>
    <Navbar/>
    <Routes/>
    </BrowserRouter>
    </Provider>
  
  );
}
