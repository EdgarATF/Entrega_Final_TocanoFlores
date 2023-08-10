import { ItemCard } from "../ItemCard/ItemCard"
import { useParams } from "react-router-dom"

export const ItemList =({productos}) => {
    const {categoryId} = useParams()
             

    return(
        <div className="container-fluid">
            {
                categoryId
                ? <h2>{categoryId}</h2>
                : <h2>All</h2>
            }
            
            <hr></hr>

            <div className='row'>
                {
                    productos.map((prod) => <ItemCard key={prod.id} item={prod}/>)                    
                }
            </div>
            
        </div>
    )
}