import { Header } from "./components/Header/Header"
import './App.css'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import { CartView } from "./components/CartView/CartView";
import { Checkout } from "./components/Checkout/Checkout";

function App() {



  return (

    <CartProvider>
      <BrowserRouter>
        
          <Header/>

          <Routes>
            <Route path="/" element={<ItemListContainer/>}></Route>
            <Route path="/productos/:categoryId" element={<ItemListContainer/>}></Route>
            <Route path="/detail/:itemId" element={<ItemDetailContainer/>}></Route>
            <Route path="*" element={<h2>Error 404</h2>}></Route>
            <Route path="/carrito" element={<CartView/>} ></Route>
            <Route path="/checkout" element={<Checkout/>}></Route>
            
          </Routes>
      </BrowserRouter> 

    </CartProvider>


        
  )
}

export default App
