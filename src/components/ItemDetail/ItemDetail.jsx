import { useState } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export const ItemDetail = ({item}) => {
    const {agregarAlCarrito, isInCart} = useContext(CartContext);

    const [cantidad, setCantidad] = useState(1)

    const handleagregar = () => {
        const newItem = {
            ...item,
            cantidad
        }

       agregarAlCarrito(newItem);
    }

    return(
            <div className="container my-5">

                <div className="card" >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={item.image} className="img-fluid rounded-start" alt={item.title}/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.description}</p>
                                <p className="card-text"><small className="text-body-secondary">Price: ${item.price}</small></p>
                                
                                {
                                    isInCart(item.id)
                                    ? <Link className="btn btn-success" to="/carrito">Proceed to purchase</Link>
                                    : <ItemCount
                                        max= {item.count}
                                        cantidad = {cantidad}
                                        setCantidad={setCantidad}
                                        agregar={handleagregar}
                                      ></ItemCount>
                                }
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
        
            </div>



    )
}