
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCounts';
import "./App.css"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import { CartProvider } from './components/context/CartContext';
import Cart from './components/Cart/Cart';



function App() {
  return (
    <div className="App">  
    <BrowserRouter >
      <CartProvider>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"¡Bienvenidos a la Tienda del Basket!"}/>} />
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="/productos" element={<ItemListContainer/>}/>
          <Route path="/categorias/:categoriaId" element={<ItemListContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
        <Footer/>
      </CartProvider>
    </BrowserRouter>      
    </div>
  );
}

export default App;
