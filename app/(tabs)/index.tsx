import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import styles from "../styles";
import { useEffect, useState } from "react";
import { Product } from "../types";
import api from "../api";
import Products from "@/components/Products";

export default function Index() {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [filteredProducts, setFilteredProducts] = useState(products);

    useEffect(() => {
        api.list().then(setProducts);
    }, []);

    useEffect(() => {
        if (selectedCategory === "All") {
            setFilteredProducts(products);
        } else {
            const filteredProducts = products.filter(
                (product: any) => product.category === selectedCategory
            );
            setFilteredProducts(filteredProducts);
        }
    }, [selectedCategory, products]);

    const categoriasUnicas = [
        "All", // Agrega la categoría "All"
        ...new Set(products.map((categ: any) => categ.category)),
    ];

    // Función para manejar la selección de categorías
    const handleCategoryPress = (categoria: string) => {
        setSelectedCategory(categoria);
        if (categoria === "All") {
            setFilteredProducts(products); // Muestra todos los productos
        } else {
            const filteredProducts = products.filter(
                (product: any) => product.category === categoria
            );
            setFilteredProducts(filteredProducts); // Filtra los productos por categoría
        }
    };

    return (
        <View style={styles.content}>
            <Image
                source={require("../../assets/clothing/banner.png")}
                style={{
                    width: 410,
                    height: 170,
                    borderRadius: 5,
                }}
            />
            {/* <Text style={{ textAlign: "left", width: "90%" }}>Category</Text> */}

            <View style={styles.contentCategory}>
                <FlatList
                    data={categoriasUnicas}
                    keyExtractor={(item) => item}
                    showsVerticalScrollIndicator={false}
                    horizontal={true}
                    style={{ paddingVertical: 3 }}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            key={item.id}
                            onPress={() => handleCategoryPress(item)}
                        >
                            <Text
                                style={[
                                    selectedCategory === item
                                        ? styles.contentCategoryTextSelected
                                        : styles.contentCategoryText,
                                ]}
                            >
                                {item}
                            </Text>
                        </TouchableOpacity>
                    )}
                />
            </View>

            <FlatList
                data={filteredProducts}
                numColumns={2}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Products key={item.id} item={item} />
                )}
                style={{
                    paddingLeft: "2%",
                    marginBottom: 2,
                }}
            />
        </View>
    );
}
