import './categorias.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export const Categoria = ({ img, link }) => {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    }

    return (
        <div className="c-cat">
            <NavLink onClick={handleClick} to= {link} >
                <img src={img} alt="categoria" className='c-img' />
            </NavLink>
        </div>
    )
}
