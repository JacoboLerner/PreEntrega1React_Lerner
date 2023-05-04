import "./Item.css"


const Item =({id,nombre,img,precio,stock})=>{
    return(
        <article className=" col-xl-2 col-xxl-2 col-lg-3 col-md-4 col-sm-5 col-10 mx-auto card  pb-3 carta p-1 ">
            <header>
                <h2>
                    {nombre}
               </h2>
            </header>
            <picture>
                <img className="imagen_camiseta" src={img} alt={nombre} />
            </picture>
            <section>
                <p>
                    Precio: ${precio}
                </p>
                <p>
                    Stock Disponible: {stock}
                </p>
            </section>
            <footer>
                <button className="btn btn-warning">Ver detalle</button>
            </footer>
        </article>
    )
}

export default Item