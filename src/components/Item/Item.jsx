import { Link } from "react-router-dom";
import "./Item.css"


const Item =({id,nombre,img,precio,stock,categoria})=>{

    return (
        <div className="card col col-xxl-2 col-xl-2 col-lg-3  col-md-5 col-sm-5 col-10 mb-4 shadow-sm rounded border border-dark carta" >
        <img src={img} className="card-img-top imagen_camiseta pt-2" alt={nombre}/>
            <div className="card-body  " >
                <h5 className="card-title" style={{ fontSize: '1.25rem' }}>{nombre}</h5>
                <p className="card-text" style={{ fontSize: '0.975rem', marginBottom: '1rem' }}>Categoria: {categoria}</p>
                <p className="card-text" style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>Precio: $ {precio}</p>
                <p className="card-text" style={{ fontSize: '0.975rem', marginBottom: '1rem' }}>Stock: {stock}</p>
                <div className="d-flex justify-content-center">
                    <Link to={`/Item/${id}`}>
                        <button type="button" className="btn btn-sm btn-outline-secondary" style={{ fontSize: '0.875rem', fontWeight: 'bold' }}>Ver mas</button>
                    </Link>           
                </div>
            </div>
        </div>
    );
    }

export default Item