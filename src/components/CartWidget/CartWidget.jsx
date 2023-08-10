import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";


export const CartWidget  = () => {
    const { totalCantidad } = useContext(CartContext)


    return (
        <div>
            
            <Link to={'/carrito'}className="btn">< img src= '/cart.png' height={40} width={40}/>
                <span>{totalCantidad()}</span>
            </Link>
            


        </div>
    )
};