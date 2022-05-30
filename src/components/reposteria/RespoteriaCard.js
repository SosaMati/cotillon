import './reposteria.css';

export const ReposteriaCard = ({ img, name }) => {
    return (
        <div className="card-prod">
            <div>
                <img src={img} alt="reposteria" />
                <div>
                    <h2>{name}</h2>
                </div>
            </div>
        </div>
    )
}
