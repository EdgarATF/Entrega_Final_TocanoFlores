
export const ItemCount = ({max,cantidad,setCantidad,agregar}) => {


    const handleRestar =()=>{
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar =()=> {
        cantidad < max && setCantidad(cantidad + 1)
    }


    return(
        <div>
            <button onClick={handleRestar} className="btn btn-outline-primary" disabled={cantidad === 1}>-</button>
            <span className="mx-2">{cantidad}</span>
            <button onClick={handleSumar} className="btn btn-primary" disabled={cantidad === max}>+</button>
            <br/>
            <button onClick={agregar} className="btn btn-success my-2">Add</button>
        </div>
    )
}