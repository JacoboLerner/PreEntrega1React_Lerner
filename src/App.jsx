
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import "./App.css"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import { CartProvider } from './components/context/CartContext';
import Cart from './components/Cart/Cart';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Checkout from './components/Checkout/Checkout';
import PublicidadNBAPass from './components/PublicidadNBAPass/PublicidadNBAPass';




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
          <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
        <PublicidadNBAPass/>
        <Footer className="pt-5"/>
        <ToastContainer/>
      </CartProvider>
    </BrowserRouter>      
    </div>
  );
}

export default App;
