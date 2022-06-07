import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import GetRoutes from './routes';
import Header from './view/header';
import Footer from './view/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <GetRoutes/>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);

