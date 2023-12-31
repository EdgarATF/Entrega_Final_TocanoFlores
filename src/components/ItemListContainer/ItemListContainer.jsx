
import './ItemListContainer.css'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase/config'

 const ItemListContainer = () =>{
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)


    const {categoryId} = useParams()
    
    useEffect(() => {
        setLoading(true)

        const productosRef = collection(db,"productos")
        const q = categoryId
                    ? query(productosRef, where('category',"==", categoryId))
                    : productosRef
                        
        getDocs(q)
            .then((resp) => {
                const docs = resp.docs.map((doc)=> {
                    return{
                        id: doc.id,
                        ...doc.data()
                    }
                })
                setProductos(docs)
            })
            .catch( e=> console.log(e) )
            .finally(()=>setLoading(false))

        }, [categoryId])



    return(
        <div>
        {
            loading
                ? <div className="spinner-border text-info" role="status">
                    <span className="visually-hidden">Loading...</span>
                   </div>
                :<ItemList productos = {productos}/>
        }

        </div>


    )
}


export default ItemListContainer