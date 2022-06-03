import '../reposteria/reposteria.css';

export const GolosinasCard = ({ img, name }) => {
    return (
        <div className="card-prod">
            <div>
                <img src={img} alt="golosinas" />
                <div>
                    <h2>{name}</h2>
                </div>
            </div>
        </div>
    )
}
