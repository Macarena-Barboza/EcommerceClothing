import React, { createContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [favorite, setFavorite] = useState(false);
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);

    const [cart, setCart] = useState([]);
    function addItem(data, count) {
        if (!data.id || !data.size || !data.color) {
            console.error("El producto no tiene un ID, tamaño o color válido:", data);
            return;
        }

        const productCount = typeof count === 'number' ? count : 1;

        // Busca si ya existe un producto con el mismo id y tamaño, pero con color diferente
        const existingProduct = cart.find(
            (item) => item.id === data.id && item.size === data.size && item.color === data.color
        );

        if (existingProduct) {
            // Si ya existe el producto, solo incrementa la cantidad
            const newCart = cart.map((item) =>
                item.id === data.id && item.size === data.size && item.color === data.color
                    ? { ...item, count: item.count + productCount }
                    : item
            );
            setCart(newCart);
        } else {
            // Si no existe el producto, lo agregamos al carrito
            const newCart = [...cart, { ...data, count: productCount }];
            setCart(newCart);
        }
    }

    function updateItemCount(id, size, color, operation) { //sumar o restar cantidad 
        const updatedCart = cart.map(item => {
            if (item.id === id && item.size === size && item.color === color) {
                const newCount = operation === 'increase' ? item.count + 1 : item.count - 1;
                if (newCount >= 1) {
                    item.count = newCount;
                }
            }
            return item;
        });
        setCart(updatedCart);
    }

    function getTotalItemPriceInCart() {   //precio total
        return cart.reduce((acc, item) => {
            const itemPrice = parseFloat(item.price);

            if (isNaN(itemPrice)) {
                console.error("Precio no válido para el producto:", item);
                return acc; // Si el precio no es válido, simplemente lo ignoramos
            }

            return acc + (itemPrice * item.count);
        }, 0);
    }

    function getTotalItemInCart() { //numero carrito
        return cart.reduce((acc, item) => {
            return acc + item.count;
        }, 0);
    }

    function deleteItem(id, size, color) {
        const updatedCart = cart.filter(item =>
            !(item.id === id && item.size === size && item.color === color)
        );
        setCart(updatedCart);
    }


    function clearCart() {
        return setCart([]);
    }


    return (
        <AppContext.Provider value={{
            favorite,
            setFavorite,
            selectedSize,
            setSelectedSize,
            selectedColor,
            setSelectedColor,
            addItem,
            cart,
            getTotalItemInCart,
            deleteItem,
            getTotalItemPriceInCart,
            clearCart,
            updateItemCount
        }}>
            {children}
        </AppContext.Provider>
    );
}

export { AppContext }