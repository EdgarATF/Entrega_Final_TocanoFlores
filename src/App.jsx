import { Header } from "./components/Header/Header"
import './App.css'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


  return (
      <div>
        <Header/>
        <ItemListContainer item={"hola"}/>
      </div>
        
  )
}

export default App
