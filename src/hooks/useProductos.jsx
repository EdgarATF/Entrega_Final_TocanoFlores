import { useEffect, useState } from "react"
import { pedirDatos } from "../helpers/pedirDatos"

export const useProductos = () => {
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


    return{productos}
}