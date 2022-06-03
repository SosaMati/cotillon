import '../reposteria/reposteria.css';
import { fechasData } from '../../data';
import { FechasCard } from './FechasCard';




export const Fechas = () => {
    return (
        <div className="container">
            <div>
                <h1 className='title-prod'>Fechas</h1>
            </div>

            <div className="wrapper-prod" >
                {fechasData.map((fechas) => (
                    <FechasCard
                        key={fechas.id}
                        img={fechas.img}
                        name={fechas.name}
                    />
                ))}

            </div>
        </div>
    )
}
