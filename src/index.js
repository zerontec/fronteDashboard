import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DarkModeContextprovider } from './context/darkModeContext';
import { store } from "./store";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

     
    <DarkModeContextprovider>
    <Provider store={store}>
    <App />
    </Provider>
    </DarkModeContextprovider>
  
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
