//o App é um componente, onde utilizamos o JS para interatividade e o CSS para estilizar
import './Menu.css';
import { Link } from 'react-router-dom';


//Posso colocar aqui também colocando 
//export default function Header
function Menu() {
  return (
    <div className="Menu">
      {/* Foto da logo deve ficar fora o UL*/}
          <div className='menuLogo'>
            <img src='logo192.png'></img>
          </div>

          {/*Caminhos de link para puxar as páginas */}
          <nav className='menuSite'>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/sobre">Sobre</Link></li>
              <li><Link to="/teste">Teste</Link></li>           
            </ul>
        </nav>
    </div>
  );
}


export default Menu;
