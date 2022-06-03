import '../reposteria/reposteria.css';
import { infantilesData } from '../../data';
import { InfantilesCard } from './InfantilesCard';




export const Infantiles = () => {
    return (
        <div className="container">
            <div>
                <h1 className='title-prod'>Fiestas infantiles</h1>
            </div>

            <div className="wrapper-prod" >
                {infantilesData.map((infantiles) => (
                    <InfantilesCard
                        key={infantiles.id}
                        img={infantiles.img}
                        name={infantiles.name}
                    />
                ))}

            </div>
        </div>
    )
}
