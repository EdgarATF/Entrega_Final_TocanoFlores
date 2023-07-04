import { ItemCard } from "../ItemCard/ItemCard"

export const ItemList =({productos}) => {

    return(
        <div className="catalogo_contenedor">
            <h2>Item List Container</h2>
            <hr></hr>
            <p>hola</p>

            <div>
                {
                    productos.map((prod) => <ItemCard key={prod.id} item={prod}/>)                    
                }
            </div>
            
        </div>
    )
}