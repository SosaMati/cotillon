import '../reposteria/reposteria.css';
import { disfracesData } from '../../data';
import { DisfracesCard } from './DisfracesCard';




export const Disfraces = () => {
    return (
        <div className="container">
            <div>
                <h1 className='title-prod'>Disfraces</h1>
            </div>

            <div className="wrapper-prod" >
                {disfracesData.map((disfraces) => (
                    <DisfracesCard
                        key={disfraces.id}
                        img={disfraces.img}
                        name={disfraces.name}
                    />
                ))}

            </div>
        </div>
    )
}
