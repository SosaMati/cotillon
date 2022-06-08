import './about.css';
import { CarrouselAbout } from '../corrouselAbout/CarrouselAbout';
import globos from '../../assets/globosicono.png';

export const About = () => {
    return (
        <div className="ab">
            <div className ='c-about container'>
                <div className= 'text-about animate__animated animate__fadeInLeftBig'>
                    <h1>El cotillón <img  className='globosicono' src= {globos} alt='globos' /> </h1>
                    <br/>
                    <p> Somos un comercio familiar fundado en el año 1973 en Belén de Escobar por la señora 
                        Ines Mercedes Papaleo. Desde sus inicios el comercio se caracterizó por comercializar 
                        artículos de juguetería y librería, con el transcurso del tiempo y de las variaciones económicas del
                        país, el negocio fue modificándose de acuerdo a las circunstancias, actualmente
                        el negocio familiar comercializa productos de cotillón, disfraces, souvenirs y repostería 
                        atendido por su hijo.
                    </p>

                </div>
                <div className='img-about animate__animated animate__fadeInRightBig'>
                    <img src='https://res.cloudinary.com/dapxymupf/image/upload/v1654279902/laHormiguitaViajera/imagenes/cotillon4_mdd0yg.jpg' alt= 'cotillon' />
                </div>
            </div>

            <div className='c-bottom'>
                <h1>Nuesto local por dentro</h1>
                <p>Contamos con una amplia variedad de productos. </p>

                <CarrouselAbout />

            </div>
        </div>
    )
}
