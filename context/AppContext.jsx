import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const [favorite, setFavorite] = useState(false);
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);


    return (
        <AppContext.Provider value={{
            favorite,
            setFavorite,
            selectedSize,
            setSelectedSize,
            selectedColor,
            setSelectedColor,
        }}>
            {children}
        </AppContext.Provider>
    );
}

export { AppContext }

// export const useAppContext = () => {
//     return useContext(AppContext);
// };