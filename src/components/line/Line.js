import "./line.scss";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Line = ({ data }) => {
    const
        { cartProduct, selection, select } = useContext(CartContext),
        lineTheme = () => {
            if ((select(data, selection) !== false) && (select(data, cartProduct) !== false)) { return "line__1" }
            else if (select(data, selection) !== false) { return "line__2" }
            else if (select(data, cartProduct) !== false) { return "line__3" }
            else { return "line__4" }
        };

    return (
        <div className="line">
            <hr className={lineTheme()} />
        </div>
    );
};

export default Line;