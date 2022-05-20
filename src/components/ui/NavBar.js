import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navBar.css';
import logo from '../../assets/hormiguita.png';
import banderin from '../../assets/banderin.png';
import { BurguerButton } from './BurguerButton';

export const NavBar = () => {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        //cuando esta en true lo pasa a false y viceversa
        setClicked(!clicked);
    }

    return (
        <nav className="container">

            <Link to="/" className="hor">
                <img src={logo} alt="logo" className="logo animate__animated animate__backInLeft"/>
            </Link>

            <img className='banderin' src= { banderin } alt='banderin' />
            
            <div className={`navbar ${clicked ? 'active' : '' }`}>
                
                <NavLink onClick={handleClick} to="/"  className="button">
                    Inicio
                </NavLink>

                <NavLink onClick={handleClick} to="/productos"  className="button">
                    Productos
                </NavLink>

                <NavLink onClick={handleClick} to="/about"  className="button">
                    Sobre Nosotros
                </NavLink>

                <NavLink onClick={handleClick} to="/contacto"  className="button">
                    Contacto
                </NavLink>

            </div>

            <div className="burguer">
                <BurguerButton clicked={ clicked } handleClick={ handleClick } />
            </div>

        </nav>

    )
}
