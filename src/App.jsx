import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarcomponent from './components/Navbarcomponent'
import ItemListContainer from './components/ItemListContainer'
function App() {
  
  return (
    <div>
      <Navbarcomponent/>
      <ItemListContainer greeting='3 cuotas sin interés / 15% OFF pagando por transferencia'/>
    </div>
      
    
  )
}

export default App
