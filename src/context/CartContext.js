import { createContext } from "react";
import { useStorage } from "./custom/useStorage";

const
    CartContext = createContext(),
    CartProvider = ({ children }) => {
        const
            [cartProduct, setCartProduct] = useStorage(localStorage, "Cart"),
            localOrder = JSON.parse(localStorage.getItem("Cart")) || [],
            quantityProduct = localOrder.length,
            totalPrice = localOrder.map(data => data.price * data.quantity).reduce((a, b) => a + b, 0),
            //Esta funcion esta flasheando
            addProductCart = (product, counter) => {
                if (localOrder.find((item) => item.id === product.id)) {
                    product.quantity += counter;
                } else {
                    product.quantity = counter;
                    setCartProduct([...localOrder, product]);
                }
                //if (cartProduct.find((item) => item.id === product.id)) {
                //    product.quantity = product.quantity += counter;
                //} else {
                //    product.quantity = counter;
                //    setCartProduct([...cartProduct, product]);
                //};
            },
            //
            removeProduct = (id) => {
                setCartProduct(cartProduct.filter(product => product.id !== id));
            },
            clearCart = () => {
                setCartProduct([]);
            },
            data = {
                localOrder,
                quantityProduct,
                totalPrice,
                addProductCart,
                removeProduct,
                clearCart,
            };
            console.log(localOrder)

        return (
            <CartContext.Provider value={data}>
                {children}
            </CartContext.Provider>
        );
    };

export default CartProvider;
export { CartContext };