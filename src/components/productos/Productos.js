import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import './productos.css';
import { categoriasData, reposteriaData, bazarData } from "../../data";


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

    return (
        <div className="container prod animate__animated animate__fadeInUp">
            <div className='productos'>
                <h1>Repostería</h1>
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
                <h1>Bazar y descartables</h1>
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
                <h1>Manualidades</h1>
                <Slider {...settings}>
                    {categoriasData.map(item=>(
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
                <h1>Fiesta carioca</h1>
                <Slider {...settings}>
                    {categoriasData.map(item=>(
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
                <h1>Decoracion Fiestas</h1>
                <Slider {...settings}>
                    {categoriasData.map(item=>(
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
                <h1>Golosinas y snacks</h1>
                <Slider {...settings}>
                    {categoriasData.map(item=>(
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
                <h1>Fiesta infantil</h1>
                <Slider {...settings}>
                    {categoriasData.map(item=>(
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
                <h1>Disfraces</h1>
                <Slider {...settings}>
                    {categoriasData.map(item=>(
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
                <h1>Fechas puntuales</h1>
                <Slider {...settings}>
                    {categoriasData.map(item=>(
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
