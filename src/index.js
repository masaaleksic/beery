import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './redux/reducers';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import GetRoutes from './routes';
import Header from './view/header';
import Footer from './view/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({ reducer: rootReducer });
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