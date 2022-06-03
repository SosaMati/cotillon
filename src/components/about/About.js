import './about.css';
import { CarrouselAbout } from '../corrouselAbout/CarrouselAbout';

export const About = () => {
    return (
        <div className="ab">
            <div className ='c-about container'>
                <div className= 'text-about animate__animated animate__fadeInLeftBig'>
                    <h1>About</h1>
                    <br/>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris euismod, nunc eget euismod consectetur, nunc nisi
                        euismod, quis euismod nunc nisi euismod. Mauris euismod,
                        nunc eget euismod consectetur, nunc nisi euismod, quis 
                        euismod nunc nisi euismod. Mauris euismod, nunc eget
                        euismod consectetur, nunc nisi euismod, quis euismod. 
                        Mauris euismod, nunc eget euismod consectetur, nunc nisi
                        euismod, quis euismod nunc nisi euismod. Mauris euismod,
                        nunc eget euismod consectetur, nunc nisi euismod, quis
                        euismod nunc nisi euismod. Mauris euismod, nunc eget
                        euismod consectetur, nunc nisi euismod, quis euismod.
                        Mauris euismod, nunc eget euismod consectetur, nunc nisi.
                        lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris euismod, nunc eget euismod consectetur, nunc nisi
                        euismod, quis euismod nunc nisi euismod. Mauris euismod,
                    </p>

                </div>
                <div className='img-about animate__animated animate__fadeInRightBig'>
                    <img src='https://res.cloudinary.com/dapxymupf/image/upload/v1654279902/laHormiguitaViajera/imagenes/cotillon4_mdd0yg.jpg' alt= 'cotillon' />
                </div>
            </div>

            <div className='c-bottom'>
                <h1>Lorem Ipsum</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem </p>

                <CarrouselAbout />

            </div>
        </div>
    )
}
