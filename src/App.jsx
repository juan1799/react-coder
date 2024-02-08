import Navbar from "./components/Navbar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import './app.css'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Error from "./components/Error/Error";



function App() {
  return (

      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path="/" element={<ItemListContainer/> }/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="/productos" element={<ItemListContainer/> }/>
          <Route path="/productos/:categoria" element={<ItemListContainer/> }/>
          <Route path="/*" element={<Error/> }/>
        </Routes>
         
        <Footer/>

      </BrowserRouter>

  );
}

export default App;