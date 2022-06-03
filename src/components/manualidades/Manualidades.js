import '../reposteria/reposteria.css';
import { manualidadesData } from '../../data';
import { ManualidadesCard } from './ManualidadesCard';




export const Manualidades = () => {
    return (
        <div className="container">
            <div>
                <h1 className='title-prod'>Manualidades</h1>
            </div>

            <div className="wrapper-prod" >
                {manualidadesData.map((manualidades) => (
                    <ManualidadesCard
                        key={manualidades.id}
                        img={manualidades.img}
                        name={manualidades.name}
                    />
                ))}

            </div>
        </div>
    )
}
