import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from 'react-router-dom';
import { useState } from 'react';


import './productos.css';
import { fechasData, disfracesData, infantilesData, golosinasData, decoData, luminosaData, categoriasData, reposteriaData, bazarData, manualidadesData } from "../../data";



export const Productos = () => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    }


    return (
        <div className="container prod animate__animated animate__fadeIn">
            <div className='productos'>
                <NavLink onClick={handleClick} to= '/reposteria' >
                    <h1>Repostería</h1>
                </NavLink>
                <Slider {...settings}>
                    {reposteriaData.map(item=>(
                        <div className='card'>
                            <div className='card-top'>
                                <img src={item.img} alt={item.name} />
                                <h2>{item.name}</h2>
                            </div>

                            {/* <div className='card-bottom'>
                                <h3>{item.id}</h3>
                            </div> */}
                        </div>
                    ))}
                </Slider>
                <br/>
                <hr/>
            </div>

            <div className='productos'>
                <NavLink onClick={handleClick} to= '/bazar' >
                    <h1>Bazar y descartables</h1>
                </NavLink>
                <Slider {...settings}>
                    {bazarData.map(item=>(
                        <div className='card'>
                            <div className='card-top'>
                                <img src={item.img} alt={item.name} />
                                <h2>{item.name}</h2>
                            </div>

                            {/* <div className='card-bottom'>
                                <h3>{item.id}</h3>
                            </div> */}
                        </div>
                    ))}
                </Slider>
                <br/>
                <hr/>
            </div>

            <div className='productos'>
                <NavLink onClick={handleClick} to= '/manualidades' >
                    <h1>Manualidades</h1>
                </NavLink>
                <Slider {...settings}>
                    {manualidadesData.map(item=>(
                        <div className='card'>
                            <div className='card-top'>
                                <img src={item.img} alt={item.name} />
                                <h2>{item.name}</h2>
                            </div>

                            {/* <div className='card-bottom'>
                                <h3>{item.id}</h3>
                            </div> */}
                        </div>
                    ))}
                </Slider>
                <br/>
                <hr/>
            </div>

            <div className='productos'>
                <NavLink onClick={handleClick} to= '/carioca' >
                    <h1>Fiesta carioca</h1>
                </NavLink>
                <Slider {...settings}>
                    {luminosaData.map(item=>(
                        <div className='card'>
                            <div className='card-top'>
                                <img src={item.img} alt={item.name} />
                                <h2>{item.name}</h2>
                            </div>

                            {/* <div className='card-bottom'>
                                <h3>{item.id}</h3>
                            </div> */}
                        </div>
                    ))}
                </Slider>
                <br/>
                <hr/>
            </div>

            <div className='productos'>
                <NavLink onClick={handleClick} to= '/deco' >
                    <h1>Decoracion Fiestas</h1>
                </NavLink>
                <Slider {...settings}>
                    {decoData.map(item=>(
                        <div className='card'>
                            <div className='card-top'>
                                <img src={item.img} alt={item.name} />
                                <h2>{item.name}</h2>
                            </div>

                            {/* <div className='card-bottom'>
                                <h3>{item.id}</h3>
                            </div> */}
                        </div>
                    ))}
                </Slider>
                <br/>
                <hr/>
            </div>

            <div className='productos'>
                <NavLink onClick={handleClick} to= '/golosinas' >
                    <h1>Golosinas y snacks</h1>
                </NavLink>
                <Slider {...settings}>
                    {golosinasData.map(item=>(
                        <div className='card'>
                            <div className='card-top'>
                                <img src={item.img} alt={item.name} />
                                <h2>{item.name}</h2>
                            </div>

                            {/* <div className='card-bottom'>
                                <h3>{item.id}</h3>
                            </div> */}
                        </div>
                    ))}
                </Slider>
                <br/>
                <hr/>
            </div>

            <div className='productos'>
                <NavLink onClick={handleClick} to= '/infantiles' >
                    <h1>Fiestas infantiles</h1>
                </NavLink>
                <Slider {...settings}>
                    {infantilesData.map(item=>(
                        <div className='card'>
                            <div className='card-top'>
                                <img src={item.img} alt={item.name} />
                                <h2>{item.name}</h2>
                            </div>

                            {/* <div className='card-bottom'>
                                <h3>{item.id}</h3>
                            </div> */}
                        </div>
                    ))}
                </Slider>
                <br/>
                <hr/>
            </div>

            <div className='productos'>
                <NavLink onClick={handleClick} to= '/disfraces' >
                    <h1>Disfraces</h1>
                </NavLink>
                <Slider {...settings}>
                    {disfracesData.map(item=>(
                        <div className='card'>
                            <div className='card-top'>
                                <img src={item.img} alt={item.name} />
                                <h2>{item.name}</h2>
                            </div>

                            {/* <div className='card-bottom'>
                                <h3>{item.id}</h3>
                            </div> */}
                        </div>
                    ))}
                </Slider>
                <br/>
                <hr/>
            </div>

            <div className='productos'>
                <NavLink onClick={handleClick} to= '/fechas' >
                    <h1>Fechas puntuales</h1>
                </NavLink>
                <Slider {...settings}>
                    {fechasData.map(item=>(
                        <div className='card'>
                            <div className='card-top'>
                                <img src={item.img} alt={item.name} />
                                <h2>{item.name}</h2>
                            </div>

                            {/* <div className='card-bottom'>
                                <h3>{item.id}</h3>
                            </div> */}
                        </div>
                    ))}
                </Slider>
            </div>


        </div>
    );
}
