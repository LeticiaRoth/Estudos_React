//o App é um componente, onde utilizamos o JS para interatividade e o CSS para estilizar
import './Menu.css';


function Menu() {
  return (
    <div className="Menu">
        <div className='menuLogo'>
            <img src=''></img>
        </div>
    
        <nav className='menuSite'>
            <ul>
                <li><a href=''>Home</a></li>
                <li><a href=''>Sobre</a></li>
                <li><a href=''>Contato</a></li>
            </ul>
        </nav>
    </div>
  );
}


export default Menu;
