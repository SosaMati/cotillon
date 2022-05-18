import './categorias.css';
import { categoriasData } from '../../data';
import { Categoria } from './Categoria';


export const Categorias = () => {
    return (
        <div className="container cat">
            <div>
                
            </div>

            <div className='c-list' >
                {categoriasData.map((categoria) => (
                    <Categoria
                        key={categoria.id}
                        img={categoria.img}
                        name={categoria.name}
                    />
                ))}

            </div>
        </div>
    )
}
