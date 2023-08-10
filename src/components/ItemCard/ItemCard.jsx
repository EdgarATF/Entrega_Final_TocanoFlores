
import { Link } from "react-router-dom"

export const ItemCard = ({item})=> {

    return (
        <div className="col-2 m-3">
            <div className="card"  >
            <img src ={item.image} className="card-img-top" alt={item.title}/>
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">Price: ${item.price}</p>
                {
                    item.count < 10 && <p className="text-red-500">Hurry, last {item.count}</p>
                }
                <Link to={`/detail/${item.id}`}className="btn btn-info">See more</Link>
             </div>
            </div> 


        </div>
        
    )
}    
