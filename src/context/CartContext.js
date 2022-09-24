import { createContext, useState } from "react";

const
    CartContext = createContext(),
    CartProvider = ({ children }) => {
        const
            [cartProduct, setCartProduct] = useState([]),
            [quantityProduct, setQuantityProduct] = useState(0),
            [totalPrice, setTotalPrice] = useState(0),
            addProductCart = (product, counter) => {
                if (cartProduct.find(item => item.id === product.id)) {
                    product.quantity += counter;
                } else {
                    product.quantity = counter;
                    setQuantityProduct(cartProduct.length + 1);
                    setCartProduct([...cartProduct, product]);
                };
                setTotalPrice(totalPrice + product.price * product.quantity);
            },
            removeProduct = (id) => {
                setCartProduct(cartProduct.filter(product => product.id !== id));
                setQuantityProduct(cartProduct.length - 1);
            },
            clearCart = () => {
                setCartProduct([]);
                setQuantityProduct(0);
            },
            data = {
                cartProduct,
                quantityProduct,
                totalPrice,
                addProductCart,
                removeProduct,
                clearCart,
            };

        return (
            <CartContext.Provider value={data}>
                {children}
            </CartContext.Provider>
        );
    };

export default CartProvider;
export { CartContext };