import "./ItemListContainer.css"

const ItemListContainer = ({greeting})=> {
    return (
        <div>
            <h1 className="listTitulo d-flex justify-content-center">{greeting}</h1>
        </div>
    )
}

export default ItemListContainer