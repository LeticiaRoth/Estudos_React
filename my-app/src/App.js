//o App é um componente, onde utilizamos o JS para interatividade e o CSS para estilizar
import './App.css';

//Importo o componente menu do diretorio menu
import Menu from './Menu';

function App() {
  return (
    <div className="App">
      <Menu/>
    </div>
  );
}


export default App;
