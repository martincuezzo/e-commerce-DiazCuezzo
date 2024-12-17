import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarcomponent from './components/Navbarcomponent'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import Faqs from './components/Faqs';
import AboutUs from './components/AboutUs';
import { CartProvider } from './context/CartContext';
import CartContainer from './components/CartContainer';
import Checkout from './components/Checkout';
function App() {
  
  return (
    <CartProvider>
    <BrowserRouter>
      <Navbarcomponent/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting='3 cuotas sin interés / 15% OFF pagando por transferencia'/>}/>
        <Route path='/categoria/:categoria' element={<ItemListContainer greeting='3 cuotas sin interés / 15% OFF pagando por transferencia'/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/preguntas-frecuentes' element={<Faqs/>}/>
        <Route path='/quienes-somos' element={<AboutUs/>}/>
        <Route path='/cart' element={<CartContainer/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
    </BrowserRouter>

    </CartProvider>
    


  )
}

export default App
