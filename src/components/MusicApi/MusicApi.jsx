import { useState } from "react"
import { useEffect } from "react"
import { useFetch } from "../../hooks/useFetch"

export const MusicApi = () => {

    const [id,setId] = useState(302138)

    const { data: album } = useFetch(`https://api.deezer.com/album/${id}`,[id])



    const handleSiguiente = () => setId(id + 1)
    const handleAnterior= () => id>1 && setId(id - 1)

    return(
        <div className="container my-5">
            <h2>MusicApi</h2>
            <hr />
            {
                album && 
                    <div>
                        <h4>{album.attributes.title}</h4>
                        <img src={album.cover} alt={album.title}/>
                    
                    </div>
            }

            <button onClick={handleAnterior} className="btn btn-primary mx-1" >Anterior</button>
            <button onClick={handleSiguiente} className="btn btn-primary mx-1" >siguiente</button>
        </div>
    )

}