import "./styles/style.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavContainer from "./components/navContainer/NavContainer";
import ItemDetailContainer from "./components/itemDetail/ItemDetailContainer";
import Error404 from "./pages/404/Error404";
import Home from "./pages/home/Home";
import Productos from "./pages/productos/Productos";
import Servicios from "./pages/servicios/Servicios";
import Contacto from "./pages/contacto/Contacto";
import Registro from "./pages/registro/Registro";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/:category/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;