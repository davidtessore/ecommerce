import { createContext } from "react";
import { useStorage } from "./custom/useStorage";

const
    CartContext = createContext(),
    CartProvider = ({ children }) => {
        const
            [cartProduct, setCartProduct] = useStorage(localStorage, "Cart"),
            [selection, setSelection] = useStorage(localStorage, "Store"),
            quantityProduct = cartProduct.length,
            quantityFavourite = selection.length,
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
            clearCart = () => {
                setCartProduct([])
            },
            select = (data, select) => {
                if (select) { return select.find(item => item.id === data.id) !== undefined }
                else { return false }
            },
            filter = (select, setSelect, data) => {
                if (select) {
                    if (select.find(item => item.id === data.id) === undefined) { setSelect([...select, data]) }
                    else { setSelect(select.filter(item => item.id !== data.id)) }
                }
                else { setSelect([...select, data]) }
            },
            data = {
                cartProduct,
                setCartProduct,
                selection,
                setSelection,
                quantityProduct,
                quantityFavourite,
                totalPrice,
                addProductCart,
                removeProduct,
                clearCart,
                select,
                filter,
            };

        return (
            <CartContext.Provider value={data}>
                {children}
            </CartContext.Provider>
        );
    };

export default CartProvider;
export { CartContext };