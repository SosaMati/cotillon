import '../reposteria/reposteria.css';

export const ManualidadesCard = ({ img, name }) => {
    return (
        <div className="card-prod">
            <div>
                <img src={img} alt="manualidades" />
                <div>
                    <h2>{name}</h2>
                </div>
            </div>
        </div>
    )
}
