import '../reposteria/reposteria.css';

export const DecoCard = ({ img, name }) => {
    return (
        <div className="card-prod">
            <div>
                <img src={img} alt="decoraciones" />
                <div>
                    <h2>{name}</h2>
                </div>
            </div>
        </div>
    )
}
