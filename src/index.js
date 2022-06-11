import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import GetRoutes from './routes';
import Header from './view/header';
import Footer from './view/footer';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header/>
        <GetRoutes/>
        <Footer/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

