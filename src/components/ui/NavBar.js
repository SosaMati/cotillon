import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/hormiguita.png';
import './navBar.css';
import banderin from '../../assets/banderin.png';

export const NavBar = () => {
    return (
        <nav className="container">

            <Link to="/" className="hor">
                <img src={logo} alt="logo" className="logo animate__animated animate__backInLeft"/>
            </Link>

            <img className='banderin' src= { banderin } alt='banderin' />
            
            <div className="navbar">
                
                <NavLink to="/"  className="button">
                    Inicio
                </NavLink>

                <NavLink to="/productos"  className="button">
                    Productos
                </NavLink>

                <NavLink to="/about"  className="button">
                    Sobre Nosotros
                </NavLink>

                <NavLink to="/contacto"  className="button">
                    Contacto
                </NavLink>

            </div>

        </nav>

    )
}
