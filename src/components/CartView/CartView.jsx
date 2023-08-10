import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"

export const CartView = ()=> {

    const { cart, totalCompra, vaciarCarrito, removerDelCarrito } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className="container my-5">
                <h2 className="text-4xl">Your cart is empty</h2>
                <hr/>
                <Link to="/" className="btn btn-success"> Go shopping </Link>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <h2 className="text-4xl">Your purchase</h2>
            <hr/>

            {
                cart.map((item) => (
                    <div key={item.id}>
                        <div className="card text-center mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                <img src={item.image} className="img-fluid rounded-start"  height={200} width={200} alt={item.title}/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">Price: {item.price}</p>
                                    <p className="card-text">Quantity: {item.cantidad}</p>
                                    <p className="card-text">Subtotal:{item.price * item.cantidad}</p>

                                    <br/>
                                    <button onClick={() => removerDelCarrito(item.id)} className="btn btn-outline-danger">< img src= '/borrar.png' height={40} width={40}/></button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }

            <div>
                <h4 className="text-3xl my-2">Total: ${totalCompra()}</h4>

                <button onClick={vaciarCarrito} className="btn btn-danger">Empty Cart</button>
                <Link to="/checkout" className="btn btn-success">Buy</Link>
            </div>            
        </div>
    )
}