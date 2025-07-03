import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

//Utilizo o render para pegar o componente React e o inserir dentro do HTML

//Estou invocando o App que é meu componente

//Coloquei o props onde tenho o mesmo componente, com comportamentos diferentes
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);


reportWebVitals();
