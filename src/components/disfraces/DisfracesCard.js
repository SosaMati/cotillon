import '../reposteria/reposteria.css';

export const DisfracesCard = ({ img, name }) => {
    return (
        <div className="card-prod">
            <div>
                <img src={img} alt="disfraces" />
                <div>
                    <h2>{name}</h2>
                </div>
            </div>
        </div>
    )
}
