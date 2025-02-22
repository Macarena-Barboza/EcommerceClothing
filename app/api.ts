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
        },
        {
            id: 2,
            title: "Blusa estampada",
            price: 28.999,
            image: require("../assets/clothing/blusaestampada.jpg"),
            image1: require("../assets/clothing/blusaestampada1.jpg"),
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Nobis quibusdam consectetur sunt dicta magni? Necessitatibus neque corporis voluptatem odit illo reprehenderit adipisci  facere incidunt?",
        },
    ],
};
export default api;
