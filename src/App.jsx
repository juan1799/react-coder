import NavBar from "./components/Navbar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import './App.css'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Error from "./components/Error/Error";
import Cart from "./components/Cart/Cart";

import { CartProvider } from "./context/CartContext";
import Checkout from "./components/Checkout/Checkout";


function App() {

  return (
      <CartProvider>
        <BrowserRouter>

          <NavBar />

          <Routes>
            <Route path="/" element={<ItemListContainer/> }/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="/productos" element={<ItemListContainer/> }/>
            <Route path="/productos/:categoria" element={<ItemListContainer/> }/>
            <Route path="/carrito" element={<Cart/> }/>
            <Route path="/checkout" element={<Checkout/> }/>
            <Route path="/*" element={<Error/> }/>
          </Routes>
          
          <Footer/>

        </BrowserRouter>
      </CartProvider>
      

  );
}

export default App;