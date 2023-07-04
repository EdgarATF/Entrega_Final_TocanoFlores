

export const ItemCard = ({item})=> {

    return (
        <div> 

            <h4>{item.nombre}</h4>
            <img src ={item.img} alt={item.nombre}/>
            <p>{item.descripcion}</p>
            <p>Precio: ${item.precio}</p>
            <button>Ver mas</button>   

        </div>
    )
}