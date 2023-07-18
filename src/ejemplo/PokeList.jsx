import { useState } from "react"
import { useEffect } from "react"


export const PokeList = () => {

    const [list,setList] = useState([])

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/`)
            .then((resp) => resp.json())
            .then((data) => {
                setList(data)
            })
    },[id])

    const handleSiguiente = () => setId(id + 1)
    const handleAnterior= () => id>1 && setId(id - 1)

    return(
        <div className="container my-5">
            <h2>PokeList</h2>
            <hr />
            {
                pokemon && 
                    <div>
                        <h4>{pokemon.name}</h4>
                        <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                    
                    </div>
            }

            <button onClick={handleAnterior} className="btn btn-primary mx-1" >Anterior</button>
            <button onClick={handleSiguiente} className="btn btn-primary mx-1" >siguiente</button>
        </div>
    )

}