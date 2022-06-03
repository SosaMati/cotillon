import '../reposteria/reposteria.css';
import { luminosaData } from '../../data';
import { LuminosaCard } from './LuminosaCard';




export const Luminosa = () => {
    return (
        <div className="container">
            <div>
                <h1 className='title-prod'>Fiesta Carioca</h1>
            </div>

            <div className="wrapper-prod" >
                {luminosaData.map((luminosa) => (
                    <LuminosaCard
                        key={luminosa.id}
                        img={luminosa.img}
                        name={luminosa.name}
                    />
                ))}

            </div>
        </div>
    )
}
