import '../reposteria/reposteria.css';
import { decoData } from '../../data';
import { DecoCard } from './DecoCard';




export const Deco = () => {
    return (
        <div className="container">
            <div>
                <h1 className='title-prod'>Decoraciones</h1>
            </div>

            <div className="wrapper-prod" >
                {decoData.map((deco) => (
                    <DecoCard
                        key={deco.id}
                        img={deco.img}
                        name={deco.name}
                    />
                ))}

            </div>
        </div>
    )
}
