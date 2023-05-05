
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCounts';
import "./App.css"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



function App() {
  return (
    <div className="App">  
      <Navbar/>
      <ItemListContainer greeting={"¡Bienvenidos a la Tienda del Basket!"}/>
      <ItemDetailContainer itemId={4}/>
      
    </div>
  );
}

export default App;
