import React, { useState, createContext } from "react";
import { Alert } from "react-native";

const favContext = createContext();

export default function FavContextProvider({ children }) {

    const [favorit, setFavorit] = useState([]);
    const [favorite, setFavorite] = useState(false);


    const addFavorite = (item) => {
        if (favorite === false) {
            Alert.alert("Favorite", `is added '${item.title}' to favorite`, [
                {
                    text: "OK",
                },
            ]);
        }

        const newFav = favorit.findIndex((i) => i.id === item.id);

        // Si el producto ya está en la lista, eliminamos el favorito
        if (newFav > -1) {
            deleteFavorite(item.id);  // Eliminar el favorito
        } else {
            setFavorit([...favorit, item]);  // Agregar a favoritos
        }

        // Alternar el estado de "favorite"
        setFavorite(!favorite);
    };

    const deleteFavorite = (id) => {
        setFavorit(favorit.filter((i) => i.id !== id));  // Filtrar el producto
        setFavorite(!favorite)
    };

    return (
        <favContext.Provider value={{
            favorit, addFavorite, deleteFavorite,
            favorite, setFavorite,
        }}>
            {children}
        </favContext.Provider>
    );
}
export { favContext };