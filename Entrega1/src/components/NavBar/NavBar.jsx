import CartWidget from '../CartWidget/CartWidget'
import logo from '../../assets/logo.png'
import './NavBar.css'

function NavBar(){

    return (

        <header>
            <nav className='nav-bar'>
                <a href="/" className="logo">
                    <img src={logo} alt="SnackManía Logo" />
                </a>                   
                <ul className='nav-bar-options'>
                    <li className='nav-bar-item'>Home</li>
                    <li className='nav-bar-item'>productos</li>
                    <li className='nav-bar-item'>contacto</li>
                </ul>
                <CartWidget />
                </nav>
        </header>

    )
}

export default NavBar