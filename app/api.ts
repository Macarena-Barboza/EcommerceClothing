import { Product } from "./types";

const api = {
    list: async (): Promise<Product[]> => [
        {
            id: 1,
            title: "Blusa con volados",
            price: 17.956,
            image: require("../assets/clothing/blusaconvolados.jpg"),
            image1: require("../assets/clothing/blusaconvolados1.jpg"),
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Nobis quibusdam consectetur sunt dicta magni? Necessitatibus neque corporis?",
            size: ["S", "M", "L"],
            colors: ["red", "green", "black"],
            category: "Blusa",
        },
        {
            id: 2,
            title: "Blusa estampada",
            price: 28.999,
            image: require("../assets/clothing/blusaestampada.jpg"),
            image1: require("../assets/clothing/blusaestampada1.jpg"),
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Nobis quibusdam consectetur sunt dicta magni? Necessitatibus neque corporis ?",
            size: ["S", "M", "L"],
            colors: ["red", "orange"],
            category: "Saco",
        },
        {
            id: 3,
            title: "Blusa Floral",
            price: 19.996,
            image: require("../assets/clothing/blusafloral.jpg"),
            image1: require("../assets/clothing/blusafloral1.jpg"),
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Nobis quibusdam consectetur sunt dicta magni? Necessitatibus neque corporis?",
            size: ["S", "M", "L"],
            colors: ["red", "pink", "black"],
            category: "Blusa",
        },
        {
            id: 4,
            title: "Buzo Oversized",
            price: 23.557,
            image: require("../assets/clothing/buzooversized.jpg"),
            image1: require("../assets/clothing/buzooversized1.jpg"),
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Nobis quibusdam consectetur sunt dicta magni? Necessitatibus neque corporis?",
            size: ["S", "L"],
            colors: ["pink", "black"],
            category: "Buso",
        },
    ],
};
export default api;
