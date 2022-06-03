import '../reposteria/reposteria.css';
import { golosinasData } from '../../data';
import { GolosinasCard } from './GolosinasCard';




export const Golosinas = () => {
    return (
        <div className="container">
            <div>
                <h1 className='title-prod'>Golosinas y snacks</h1>
            </div>

            <div className="wrapper-prod" >
                {golosinasData.map((golosina) => (
                    <GolosinasCard
                        key={golosina.id}
                        img={golosina.img}
                        name={golosina.name}
                    />
                ))}

            </div>
        </div>
    )
}
