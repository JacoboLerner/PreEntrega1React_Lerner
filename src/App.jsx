
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCounts';
import "./App.css"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">  
    <BrowserRouter >
      <Navbar/>
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={"¡Bienvenidos a la Tienda del Basket!"}/>} />
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route path="/productos" element={<ItemListContainer/>}/>
        <Route path="/categorias/:categoriaId" element={<ItemListContainer/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>      
    </div>
  );
}

export default App;
