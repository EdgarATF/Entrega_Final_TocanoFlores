import { useState } from "react";
import { ItemCount } from "../ItemCount/ItemCount";


export const ItemDetail = ({item}) => {
    const [cantidad, setCantidad] = useState(1)
    const handleagregar = () => {
        console.log("Item a agregar",{
            ...item,
            cantidad
        })
    }

    return(
        <div className="container my-5">
            <h2>{item.nombre}</h2>
            <img src={item.img} alt={item.nombre} />
            <p>{item.descripcion}</p>
            <p>precio: ${item.precio}</p>
        
            <ItemCount
                counter = {cantidad}
                setCounter={setCantidad}
                agregar={handleagregar}
            ></ItemCount>
            
        
        </div>
    )
}