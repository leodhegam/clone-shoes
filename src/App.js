import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';
import Navbar from './components/pages/NavBar';

export default function App() {
  return (
<BrowserRouter>
<Navbar/>
<Routes/>
</BrowserRouter>
  
  );
}
