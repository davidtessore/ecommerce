import "./styles/style.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import productList from "./utils/ProductsMock";
import NavContainer from "./components/navContainer/NavContainer";
import ItemDetailContainer from "./components/itemDetail/ItemDetailContainer";
import Error404 from "./pages/404/Error404";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Services from "./pages/services/Services";
import Contact from "./pages/contact/Contact";
import Registration from "./pages/registration/Registration";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Products data={productList} />} />
          <Route path="/:category" element={<Products data={productList} />} />
          <Route path="/:category/:id" element={<ItemDetailContainer data={productList} />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/registro" element={<Registration />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;