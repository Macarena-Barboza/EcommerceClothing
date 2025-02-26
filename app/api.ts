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
        {
            id: 5,
            title: "Calza",
            price: 23.557,
            image: require("../assets/clothing/calza.jpg"),
            image1: require("../assets/clothing/calza1.jpg"),
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Nobis quibusdam consectetur sunt dicta magni? Necessitatibus neque corporis?",
            size: ["S", "L"],
            colors: ["pink", "black"],
            category: "Calza",
        },
        {
            id: 5,
            title: "Calza tipo Pescadora",
            price: 23.557,
            image: require("../assets/clothing/calzatipopescadora.jpg"),
            image1: require("../assets/clothing/calzatipopescadora1.jpg"),
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Nobis quibusdam consectetur sunt dicta magni? Necessitatibus neque corporis?",
            size: ["S", "L"],
            colors: ["pink", "black"],
            category: "Calza",
        },
        {
            id: 6,
            title: "Camisa Lisa",
            price: 23.557,
            image: require("../assets/clothing/camisalisa.jpg"),
            image1: require("../assets/clothing/camisalisa1.jpg"),
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Nobis quibusdam consectetur sunt dicta magni? Necessitatibus neque corporis?",
            size: ["S", "L"],
            colors: ["pink", "black"],
            category: "Camisa",
        },
        {
            id: 7,
            title: "Camisa con Encaje",
            price: 23.557,
            image: require("../assets/clothing/camisatransparenteconencaje.jpg"),
            image1: require("../assets/clothing/camisatransparenteconencaje1.jpg"),
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Nobis quibusdam consectetur sunt dicta magni? Necessitatibus neque corporis?",
            size: ["S", "L"],
            colors: ["pink", "black"],
            category: "Camisa",
        },
        {
            id: 8,
            title: "Campera Bomber",
            price: 23.557,
            image: require("../assets/clothing/camperabomber.jpg"),
            image1: require("../assets/clothing/camperabomber1.jpg"),
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Nobis quibusdam consectetur sunt dicta magni? Necessitatibus neque corporis?",
            size: ["S", "L"],
            colors: ["pink", "black"],
            category: "Campera",
        },
        {
            id: 9,
            title: "Campera Jean",
            price: 23.557,
            image: require("../assets/clothing/camperajean.jpg"),
            image1: require("../assets/clothing/camperajean1.jpg"),
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Nobis quibusdam consectetur sunt dicta magni? Necessitatibus neque corporis?",
            size: ["S", "L"],
            colors: ["pink", "black"],
            category: "Campera",
        },
        {
            id: 9,
            title: "Cardigan",
            price: 23.557,
            image: require("../assets/clothing/cardigan1.jpg"),
            image1: require("../assets/clothing/cardigann.jpg"),
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Nobis quibusdam consectetur sunt dicta magni? Necessitatibus neque corporis?",
            size: ["S", "L"],
            colors: ["pink", "black"],
            category: "Cardigan",
        },
        {
            id: 10,
            title: "Chaqueta Botonadura",
            price: 23.557,
            image: require("../assets/clothing/chaquetadoblebotonadura.jpg"),
            image1: require("../assets/clothing/chaquetadoblebotonadura1.jpg"),
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Nobis quibusdam consectetur sunt dicta magni? Necessitatibus neque corporis?",
            size: ["S", "L"],
            colors: ["pink", "black"],
            category: "Chaqueta",
        },
        {
            id: 11,
            title: "Chupin Bengalina",
            price: 23.557,
            image: require("../assets/clothing/chupinbengalina.jpg"),
            image1: require("../assets/clothing/chupinbengalina1.jpg"),
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Nobis quibusdam consectetur sunt dicta magni? Necessitatibus neque corporis?",
            size: ["S", "L"],
            colors: ["pink", "black"],
            category: "Chupin",
        },
        {
            id: 12,
            title: "Chupin bolsillo",
            price: 23.557,
            image: require("../assets/clothing/chupinbengalinabolsillo.jpg"),
            image1: require("../assets/clothing/chupinbengalinabolsillo1.jpg"),
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Nobis quibusdam consectetur sunt dicta magni? Necessitatibus neque corporis?",
            size: ["S", "L"],
            colors: ["pink", "black"],
            category: "Chupin",
        },
        {
            id: 13,
            title: "Chupin con lazo",
            price: 23.557,
            image: require("../assets/clothing/chupinbengalinaconlazo.jpg"),
            image1: require("../assets/clothing/chupinbengalinaconlazo1.jpg"),
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Nobis quibusdam consectetur sunt dicta magni? Necessitatibus neque corporis?",
            size: ["S", "L"],
            colors: ["pink", "black"],
            category: "Chupin",
        },
        {
            id: 14,
            title: "Jeans",
            price: 23.557,
            image: require("../assets/clothing/jeans.jpg"),
            image1: require("../assets/clothing/jeans1.jpg"),
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Nobis quibusdam consectetur sunt dicta magni? Necessitatibus neque corporis?",
            size: ["S", "L"],
            colors: ["pink", "black"],
            category: "Jeans",
        },
        {
            id: 15,
            title: "Remera Calada",
            price: 23.557,
            image: require("../assets/clothing/remeracalada.jpg"),
            image1: require("../assets/clothing/remeracalada1.jpg"),
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Nobis quibusdam consectetur sunt dicta magni? Necessitatibus neque corporis?",
            size: ["S", "L"],
            colors: ["pink", "black"],
            category: "Remera",
        },
        {
            id: 16,
            title: "Remera cuello V",
            price: 23.557,
            image: require("../assets/clothing/remeracuellov.jpg"),
            image1: require("../assets/clothing/remeracuellov1.jpg"),
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Nobis quibusdam consectetur sunt dicta magni? Necessitatibus neque corporis?",
            size: ["S", "L"],
            colors: ["pink", "black"],
            category: "Remera",
        },
        {
            id: 17,
            title: "Remera Encaje",
            price: 23.557,
            image: require("../assets/clothing/remeraencaje.jpg"),
            image1: require("../assets/clothing/remeraencaje1.jpg"),
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Nobis quibusdam consectetur sunt dicta magni? Necessitatibus neque corporis?",
            size: ["S", "L"],
            colors: ["pink", "black"],
            category: "Remera",
        },
        {
            id: 18,
            title: "Remera con manga",
            price: 23.557,
            image: require("../assets/clothing/remeramangamurcielago.jpg"),
            image1: require("../assets/clothing/remeramangamurcielago1.jpg"),
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Nobis quibusdam consectetur sunt dicta magni? Necessitatibus neque corporis?",
            size: ["S", "L"],
            colors: ["pink", "black"],
            category: "Remera",
        },
        {
            id: 19,
            title: "Remera Sedoso",
            price: 23.557,
            image: require("../assets/clothing/remerasedoso.jpg"),
            image1: require("../assets/clothing/remerasedoso1.jpg"),
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Nobis quibusdam consectetur sunt dicta magni? Necessitatibus neque corporis?",
            size: ["S", "L"],
            colors: ["pink", "black"],
            category: "Remera",
        },
        {
            id: 20,
            title: "Sweater con Puntilla",
            price: 23.557,
            image: require("../assets/clothing/sweaterconpuntilla.jpg"),
            image1: require("../assets/clothing/sweaterconpuntilla1.jpg"),
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Nobis quibusdam consectetur sunt dicta magni? Necessitatibus neque corporis?",
            size: ["S", "L"],
            colors: ["pink", "black"],
            category: "Sweter",
        },
        {
            id: 21,
            title: "Sweater Calado",
            price: 23.557,
            image: require("../assets/clothing/sweaterdepuntoacanalado.jpg"),
            image1: require("../assets/clothing/sweaterdepuntoacanalado1.jpg"),
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Nobis quibusdam consectetur sunt dicta magni? Necessitatibus neque corporis?",
            size: ["S", "L"],
            colors: ["pink", "black"],
            category: "Sweter",
        },
    ],
};
export default api;
