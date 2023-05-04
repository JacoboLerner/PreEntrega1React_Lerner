
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCounts';

function App() {
  return (
    <div className="App">  
      <Navbar/>
      <ItemListContainer greeting={"Bienvenidos a la Tienda del Basket!!"}/>
      <ItemCount inicial ={1} stock ={10} onAdd ={(cantidad)=> console.log("Cantidad agregada", cantidad)}/>
    </div>
  );
}

export default App;
