
import { Link } from "react-router-dom"

export const ItemCard = ({item})=> {

    return (
        <div className="card col-3 m-2" >
            <img src ={item.img} className="card-img-top" alt={item.nombre}/>
            <div className="card-body">
                <h5 className="card-title">{item.nombre}</h5>
                <p className="card-text">{item.descripcion}</p>
                <p className="card-text">Precio: ${item.precio}</p>
                <Link to={`/detail/${item.id}`}className="btn btn-info">Ver mas</Link>
             </div>
        </div> 

    )
}    

{/*        <div class="card border-info m-2" >
            <div class="row g-0">
                <div class="col-md-2">
                    <img src ={item.img} class="img-fluid rounded-start" alt={item.nombre}/>
                </div>
                <div class="col-3 md-3">
                    <div class="card-body"> 

                    <h4 class= "card-title">{item.nombre}</h4>

                    <p class="card-text">{item.descripcion}</p>
                    <p class="card-text">Precio: ${item.precio}</p>
                    <a href="#" class="btn btn-info">Ver mas</a>

                    </div>     
                </div>
            </div>
            </div>*/}