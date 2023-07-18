import { Header } from "./components/Header/Header"
import './App.css'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css';
import { PokeApi } from "./ejemplo/PokeApi";
import { PokeList } from "./ejemplo/PokeList";
//import 'react-bootstrap'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MusicApi } from "./components/MusicApi/MusicApi";
import { Contacto } from "./ejemplo/Contacto";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {


  return (
    <BrowserRouter>
      
        <Header/>
        {/*<Contacto></Contacto>*/}

        <Routes>
          <Route path="/" element={<ItemListContainer/>}></Route>
          <Route path="/productos" element={<ItemListContainer/>}></Route>
          {/*<Route path="/albums" element={<MusicApi/>}></Route>*/}
          <Route path="/detail/:itemId" element={<ItemDetailContainer/>}></Route>
          <Route path="*" element={<h2>Error 404</h2>}></Route>
          <Route path="/pokemon" element ={<PokeApi/>}></Route>
          
        </Routes>

        
        {/*<PokeApi/><PokeList/>*/}
        
       
    </BrowserRouter>

        
  )
}

export default App
