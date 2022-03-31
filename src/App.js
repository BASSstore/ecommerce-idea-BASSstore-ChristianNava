import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";


const App = () => {
  return (
    
      <BrowserRouter>
        <NavBar
          logo={"https://intelegoprojects.com/_Christian/logo.png"}
          //link1={"3090"}
          //link2={"3080"}
          //link3={"GPU"}
        />
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer heading={"Lista de Instrumentos Musicales"} />
            }
          ></Route>
          <Route
            path="/category/:category"
            element={
              <ItemListContainer heading={"Lista de Instrumentos Musicales"} />
            }
          ></Route>

          <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
        
        <Footer />
      </BrowserRouter>
    
  );
};

export default App;
