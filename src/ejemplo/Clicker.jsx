import { useState, useRef, useEffect } from "react"


export const Clicker  = () => {
    const [counter, setCounter] = useState(0)
    const [saludo, setSaludo] = useState(true)

    console.log(saludo)

    const clickear = () => {
        setCounter(counter + 1)
    }

    const cambiarSaludo =() =>{
        setSaludo(!saludo)
    }  

    useEffect(()=>{
        console.log("counter actualizado")
        
        return ()=>{
            console.log("limpieza")
        }
    
    },[counter])

    useEffect(()=> {
        const interval = setTimeout(()=> {
            console.log("hi")
        },2000)
        return ()=> {
            clearTimeout(interval)
        }
    },[saludo])

    const  date = useRef(new Date())

    if(counter%10===0){
        date.current = new Date()
    }


    return (
        <div>
            <p>componente generado: {date.current.toLocaleString()}</p>
            <button onClick={clickear}>clik me </button>
            <p>Clicks: {counter}</p>

            <button onClick={cambiarSaludo}>Saludar</button>
            <p>{saludo ? "hola":"adios"}</p>

        </div>
    )
}