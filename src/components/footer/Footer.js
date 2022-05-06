import './footer.css';

import footerf from '../../assets/footer.svg';

export const Footer = () => {
    return (
        <div className="contenedor">
            <img className='fondof' src={footerf} />
            <div className="wrapper">
               <h1>Footer</h1>
            </div>
        </div>
    )
}
