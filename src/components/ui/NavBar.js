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

            <img className='banderin' src= { banderin } />
            
            <div className="navbar">
                
                <NavLink to="/"  className="button" activeClassName="active">
                    Inicio
                </NavLink>

                <NavLink to="/productos"  className="button" activeClassName="active">
                    Productos
                </NavLink>

                <NavLink to="/about"  className="button" activeClassName="active">
                    Sobre Nosotros
                </NavLink>

                <NavLink to="/contacto"  className="button" activeClassName="active">
                    Contacto
                </NavLink>

            </div>

        </nav>

    )
}
