import "./itemCount.scss";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const ItemCount = ({ data }) => {
    const
        [counterSelected, setCounterSelected] = useState(0),
        [counter, setCounter] = useState(1),
        { addProductCart } = useContext(CartContext),
        { stock } = data,
        add = () => { if (counter < stock) { setCounter(counter + 1) } },
        take = () => { if (counter > 0) { setCounter(counter - 1) } },
        onAdd = () => {
            addProductCart(data, counter);
            setCounterSelected(counter);
        };

    return (
        <div className="counter">{
            counterSelected < 1
                ? <>
                    <div className="counter__countContainer">
                        <img className="counter__img" src="/assets/ico/menos.png" alt="Icono Menos" onClick={take} />
                        <p className="counter__count">Prod. {counter}</p>
                        <img className="counter__img" src="/assets/ico/mas.png" alt="Icono Mas" onClick={add} />
                    </div>
                    <div className="counter__stockContainer">
                        <p className="counter__stock">{stock} Disponibles</p>
                    </div>
                    <div className="counter__buttonContainer">
                        <button className="counter__button" onClick={onAdd}><Link className="counter__link" to={"#"}>Agregar al Carrito</Link></button>
                        <button className="counter__button" onClick={onAdd}><Link className="counter__link" to={"/checkout"}>Comprar Ahora</Link></button>
                    </div>
                </>
                : <div className="counter__buttonContainer">
                    <button className="counter__button"><Link className="counter__link" to={"/checkout"}>Terminar Compra</Link></button>
                    <button className="counter__button"><Link className="counter__link" to={"/cart"}>Ir al Carrito</Link></button>
                </div>
        }</div>
    );
};

export default ItemCount