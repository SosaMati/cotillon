import '../reposteria/reposteria.css';
import { bazarData } from '../../data';
import { BazarCard } from './BazarCard';




export const Bazar = () => {
    return (
        <div className="container">
            <div>
                <h1 className='title-prod'>Bazar y decoraciones</h1>
            </div>

            <div className="wrapper-prod" >
                {bazarData.map((bazar) => (
                    <BazarCard
                        key={bazar.id}
                        img={bazar.img}
                        name={bazar.name}
                    />
                ))}

            </div>
        </div>
    )
}
