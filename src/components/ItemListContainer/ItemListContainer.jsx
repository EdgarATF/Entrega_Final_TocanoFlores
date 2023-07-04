import { useState } from 'react'
import './ItemListContainer.css'
import { useEffect } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import { ItemList } from '../ItemList/ItemList'



 const ItemListContainer = ({item}) =>{
    const [productos, setProductos] = useState([])
  

    useEffect(()=> {
        pedirDatos()
            .then((res)=>{
                setProductos(res)
            })
            .catch((error)=>{
                setProductos(error)
            })
        },[])


    return(
        <div>
            <ItemList productos = {productos}/>
        </div>
    )
}

export default ItemListContainer