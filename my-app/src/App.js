//o App é um componente, onde utilizamos o JS para interatividade e o CSS para estilizar
import './App.css';


import React from 'react'

import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';

//Importo o componente menu do diretorio menu
import Menu from './Menu';

//Importo a página de Home
import Home from './Home';

//Importo a página SObre
import Sobre from './Sobre';

//Importo a página de Teste
import Teste from './Teste';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Menu sempre visível */}
        <Menu/>
        <Routes>
          {/*Entende como a página pricipal do projeto */}
          <Route path="/" element={<Home/>}/>
          <Route path="/sobre" element={<Sobre/>}/>
          <Route path='/teste' element={<Teste/>}/>
        </Routes>
      </div>
    </Router>
  );
}


//Utilizado para conseguir exportar o componente
export default App;

//Feature especificas do Reac
//Hook de estado {useState}, exemplo abaixo:



