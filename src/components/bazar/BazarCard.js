import '../reposteria/reposteria.css';

export const BazarCard = ({ img, name }) => {
    return (
        <div className="card-prod">
            <div>
                <img src={img} alt="bazar" />
                <div>
                    <h2>{name}</h2>
                </div>
            </div>
        </div>
    )
}
