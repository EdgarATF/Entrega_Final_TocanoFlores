
export const ItemCount = ({counter,setCounter,agregar}) => {


    const handleRestar =()=>{
        counter > 1 && setCounter(counter - 1)
    }

    const handleSumar =()=> {
        setCounter(counter + 1)
    }


    return(
        <div>
            <button onClick={handleRestar} className="btn btn-outline-primary">-</button>
            <span className="mx-2">{counter}</span>
            <button onClick={handleSumar} className="btn btn-primary">+</button>
            <br/>
            <button onClick={agregar} className="btn btn-succes my-2">Agregar</button>
        </div>
    )
}