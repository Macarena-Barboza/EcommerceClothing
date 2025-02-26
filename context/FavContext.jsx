import React, { useState, createContext } from "react";
import { Alert } from "react-native";

const favContext = createContext();

export default function FavContextProvider({ children }) {
    const [favorit, setFavorit] = useState([]);

    const addFavorite = (item) => {
        const isFavorite = favorit.some((fav) => fav.id === item.id);

        if (!isFavorite) {
            Alert.alert("Favorite", `is added '${item.title}' to favorite`, [
                { text: "OK" },
            ]);
            setFavorit([...favorit, item]);  // Agregar a favoritos
        } else {
            deleteFavorite(item.id);  // Eliminar de favoritos
        }
    };

    const deleteFavorite = (id) => {
        setFavorit(favorit.filter((i) => i.id !== id));  // Filtrar el producto
    };

    // Función para verificar si un producto es favorito
    const isFavorite = (item) => {
        return favorit.some((fav) => fav.id === item.id);

    }

    return (
        <favContext.Provider value={{
            favorit, addFavorite, deleteFavorite,
            isFavorite
        }}>
            {children}
        </favContext.Provider>
    );
}
export { favContext };