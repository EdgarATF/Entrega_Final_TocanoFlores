import { useEffect } from "react";

export const Contacto = ()=> {

    const clickear = (event) => {
        console.log(event)
        console.log("X:",event.x)
        console.log("Y:",event.y)
    }

    useEffect(()=>{
        window.addEventListener('click',clickear)

        return ()=> {
            window.removeEventListener("click",clickear)
        }
    },[])

    return (
        <div onClick={clickear} className="container my-5">
            <h2>Contacto</h2>
            <hr/>
        </div>
    )
}