import "./styles/style.scss";
import CartProvider from "./context/CartContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavContainer from "./components/navContainer/NavContainer";
import ItemDetailContainer from "./components/itemDetail/ItemDetailContainer";
import Error404 from "./pages/404/Error404";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Services from "./pages/services/Services";
import Contact from "./pages/contact/Contact";
import Registration from "./pages/registration/Registration";
import Cart from "./pages/cart/Cart";
import CheckOut from "./pages/checkout/CheckOut";

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="App">
          <NavContainer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/:category" element={<Products />} />
            <Route path="/:category/:id" element={<ItemDetailContainer />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/registro" element={<Registration />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;