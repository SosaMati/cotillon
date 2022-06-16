import './reposteria.css';
import { reposteriaData } from '../../data';
import { ReposteriaCard } from './RespoteriaCard';




export const Reposteria = () => {
    
    return (
        <div className="container">
            <div>
                <h1 className='title-prod'>Reposteria</h1>
            </div>

            <div className="wrapper-prod" >
                {reposteriaData.map((reposteria) => (
                    <ReposteriaCard
                        key={reposteria.id}
                        img={reposteria.img}
                        name={reposteria.name}
                    />
                ))}

            </div>
        </div>
    )
}
