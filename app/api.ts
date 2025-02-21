import { Product } from "./types";

const api = {
    list: async (): Promise<Product[]> => [
        {
            id: 1,
            title: "Blusa con volados",
            price: 17.956,
            image: require("../assets/clothing/blusaconvolados.jpg"),
            image1: require("../assets/clothing/blusaconvolados1.jpg"),
        },
        {
            id: 2,
            title: "Blusa estampada",
            price: 28.999,
            image: require("../assets/clothing/blusaestampada.jpg"),
            image1: require("../assets/clothing/blusaestampada1.jpg"),
        },
    ],
};
export default api;
