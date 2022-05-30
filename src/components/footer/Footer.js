import './footer.css';
import whatsappf from '../../assets/whatsappf.svg';
import mailf from '../../assets/mailf.svg';
import facebookf from '../../assets/facebookf.svg';
import instagramf from '../../assets/instagramf.svg';


export const Footer = () => {
    return (
        <div className="footer">
            
            <div className="contenedor container">
                <div className="wrapper">
                <div className='dirf'>
                    
                        <ul>
                            <li><h4>Dirección</h4></li>
                            <li>La Hormiguita Viajera</li>
                            <li>Colón 465, Belén de Escobar</li>
                        </ul>

                </div>
                        
                <div className='redf'>
                        <ul>
                            <li> <a className='f-link' href="https://api.whatsapp.com/send?phone=5493484342298" target="_blank" rel="noreferrer" ><img className='iconf' src={ whatsappf } alt='whatsapp'/>  Whatsapp +54 11 123456</a></li>
                            <li> <a className='f-link' href='http://' target="_blank" rel="noreferrer" ><img className='iconf' src={ mailf } alt='mail' />  lahormiguitaviajera@mail.com</a></li>
                            <li> <a className='f-link' href="https://www.facebook.com/lahormiguitaviajeracotillon" target="_blank" rel="noreferrer" ><img className='iconf' src={ facebookf } alt='facebook' />  Facebook</a></li>
                            <li> <a className='f-link' href="https://" target="_blank" rel="noreferrer" ><img className='iconf' src={ instagramf } alt='instagram' />  Instagram</a></li>
                        </ul>

                </div>
                </div>
            </div>

            <div className="portfolio container"> 
                
                <a className='link-portfolio' href="https://matiasezequielsosa.vercel.app/" target="_blank" rel="noreferrer"><p>Matías Ezequiel Sosa | 2022</p></a>

            </div>

        </div>
    )
}
