import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarcomponent from './components/Navbarcomponent'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
function App() {
  
  return (
    // <BrowserRouter>
    //   <Navbarcomponent/>
    // <Routes>
    // <Route path='/' element={<ItemListContainer greeting='3 cuotas sin interés / 15% OFF pagando por transferencia'/>}/>
    // </Routes>
    // </BrowserRouter>

    //para probar
    <div>
    <Navbarcomponent/>
    <ItemListContainer greeting='3 cuotas sin interés / 15% OFF pagando por transferencia'/>
    <ItemDetailContainer/>
    </div>


  )
}

export default App
