import '../reposteria/reposteria.css';

export const LuminosaCard = ({ img, name }) => {
    return (
        <div className="card-prod">
            <div>
                <img src={img} alt="luminosa" />
                <div>
                    <h2>{name}</h2>
                </div>
            </div>
        </div>
    )
}
