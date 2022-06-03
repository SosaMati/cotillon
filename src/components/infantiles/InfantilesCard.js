import '../reposteria/reposteria.css';

export const InfantilesCard = ({ img, name }) => {
    return (
        <div className="card-prod">
            <div>
                <img src={img} alt="infantiles" />
                <div>
                    <h2>{name}</h2>
                </div>
            </div>
        </div>
    )
}
