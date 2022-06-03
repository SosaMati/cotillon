import '../reposteria/reposteria.css';

export const FechasCard = ({ img, name }) => {
    return (
        <div className="card-prod">
            <div>
                <img src={img} alt="fechas puntuales" />
                <div>
                    <h2>{name}</h2>
                </div>
            </div>
        </div>
    )
}
