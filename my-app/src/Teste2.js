
import React, { useState,useEffect} from 'react';

import './Teste2.css';

function Teste2() {
  const [count, setContagem] = useState(0);

  //Atualiza o nome da página conforme o usuário clica no botão
  useEffect(() => {
    document.title = `Você clicou ${count} vezes`;
    
  });

  return (
    <div className='Teste2'>
        <h2>TESTE DE EFEITO</h2>

        <div className="containerTeste">
        <p>Você clicou {count} vezes</p>
        <button onClick={() => setContagem(count + 1)}>Clique aqui!</button>
        <button onClick={() => setContagem(0)}>Resetar</button>
      </div>
    </div>
  );
}

export default Teste2;
