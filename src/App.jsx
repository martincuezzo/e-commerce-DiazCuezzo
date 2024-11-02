import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarcomponent from './components/Navbarcomponent'
import ItemListContainer from './components/ItemListContainer'
function App() {
  
  return (
    <div>
      <Navbarcomponent/>
      <ItemListContainer greeting='bienvenido a mi sitio web'/>
    </div>
      
    
  )
}

export default App
