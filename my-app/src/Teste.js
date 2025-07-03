import './Teste.css';
import React, { useState } from 'react';

function Teste() {
  const [count, setContagem] = useState(0);

  return (
    <div className='Teste'>
      <h2>TESTE DE ESTADO</h2>

      <div className="containerTeste">
        <p>Você clicou {count} vezes</p>
        <button onClick={() => setContagem(count + 1)}>Clique aqui!</button>
        <button onClick={() => setContagem(0)}>Resetar</button>
      </div>
    </div>
  );
}

export default Teste;
