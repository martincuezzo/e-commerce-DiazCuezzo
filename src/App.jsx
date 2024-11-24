import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarcomponent from './components/Navbarcomponent'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import Faqs from './components/Faqs';
import AboutUs from './components/AboutUs';
function App() {
  
  return (
    
    <BrowserRouter>
    <Navbarcomponent/>
    <Routes>
    <Route path='/' element={<ItemListContainer greeting='3 cuotas sin interés / 15% OFF pagando por transferencia'/>}/>
    <Route path='/categoria/:categoria' element={<ItemListContainer greeting='3 cuotas sin interés / 15% OFF pagando por transferencia'/>}/>
    <Route path='/item/:id' element={<ItemDetailContainer/>}/>
    <Route path='/faq' element={<Faqs/>}/>
    <Route path='/about-us' element={<AboutUs/>}/>
    </Routes>
    </BrowserRouter>


  )
}

export default App
