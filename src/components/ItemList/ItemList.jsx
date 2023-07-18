import { ItemCard } from "../ItemCard/ItemCard"

export const ItemList =({productos}) => {

    return(
        <div className="catalogo_contenedor">
            <h2>Productos</h2>
            <hr></hr>

            <div className="row col-10">
                {
                    productos.map((prod) => <ItemCard key={prod.id} item={prod}/>)                    
                }
            </div>
            
        </div>
    )
}