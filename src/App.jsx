import "./App.css";
import NavBar from "./components/NavBar/navBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a mi E-commerce: FunkoShop"} />
    </>
  );
}

export default App;
