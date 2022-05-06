import './about.css';
import cotillon from '../../assets/cotillon.jpg';
import { CarrouselAbout } from '../corrouselAbout/CarrouselAbout';

export const About = () => {
    return (
        <div className="container ab">
            <div className ='c-about'>
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
                    <img src= { cotillon } alt= 'cotillon' />
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
