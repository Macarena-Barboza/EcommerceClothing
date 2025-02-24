import React, { useState, createContext, useContext } from "react";
import { AppContext } from './appContext'


const favContext = createContext();

export default function FavContextProvider({ children }) {
    const [favorit, setFavorit] = useState([]);
    const { favorite, setFavorite, } = useContext(AppContext);

    const addFavorite = (item) => {
        const newFav = favorit.findIndex((i) => i.id === item.id);
        console.log(newFav);

        // Si el producto ya está en la lista, eliminamos el favorito
        if (newFav > -1) {
            deleteFavorite(item.id);  // Eliminar el favorito
        } else {
            setFavorit([...favorit, item]);  // Agregar a favoritos
        }

        // Alternar el estado de "favorite"
        setFavorite(!favorite);
        console.log(favorit);
    };

    const deleteFavorite = (id) => {
        setFavorit(favorit.filter((i) => i.id !== id));  // Filtrar el producto
    };

    return (
        <favContext.Provider value={{ favorit, addFavorite, deleteFavorite }}>
            {children}
        </favContext.Provider>
    );
}
export { favContext };