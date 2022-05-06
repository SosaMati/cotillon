import './categorias.css';

export const Categoria = ({ img }) => {
    return (
        <div className="c-cat">
            <a href="#" target="_blank">
                <img src={img} alt="categoria" className='c-img' />
            </a>
            
        </div>
    )
}
