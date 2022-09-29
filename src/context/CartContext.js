import { createContext } from "react";
import { useStorage } from "./custom/useStorage";

const
    CartContext = createContext(),
    CartProvider = ({ children }) => {
        const
            [cartProduct, setCartProduct] = useStorage(localStorage, "Cart"),
            quantityProduct = cartProduct.length,
            totalPrice = cartProduct.map(data => data.price * data.quantity).reduce((a, b) => a + b, 0),
            addProductCart = (product, counter) => {
                if (cartProduct.find(item => item.id === product.id)) {
                    const localCart = JSON.parse(localStorage.getItem("Cart"))
                    for (let i = 0; i < localCart.length; i++) {
                        if (localCart[i].id === product.id) {
                            product = localCart[i];
                            product.quantity += counter
                        }
                        setCartProduct([...localCart])
                    }
                } else {
                    product.quantity = counter;
                    setCartProduct([...cartProduct, product])
                };
            },
            removeProduct = (id) => {
                setCartProduct(cartProduct.filter(product => product.id !== id));
            },
            clearCart = (data) => {
                localStorage.removeItem(data);
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