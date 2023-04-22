
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">  
      <Navbar/>
      <ItemListContainer greeting={"Bienvenidos a la Tienda de Basket!!"}/>
    </div>
  );
}

export default App;
