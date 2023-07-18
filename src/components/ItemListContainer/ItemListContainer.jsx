import { useState } from 'react'
import './ItemListContainer.css'
import { useEffect } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import { ItemList } from '../ItemList/ItemList'
import { useProductos } from '../../hooks/useProductos'
import { useParams } from 'react-router-dom'



 const ItemListContainer = () =>{
    const {productos} = useProductos()
    const {categoryId} = useParams()
    console.log(categoryId)
    
    return(
        <div className= "container">
            <ItemList productos = {productos}/>
        </div>
    )
}

export default ItemListContainer