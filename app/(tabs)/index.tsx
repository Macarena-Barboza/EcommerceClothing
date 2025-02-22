import { FlatList, Text, View } from "react-native";
import styles from "../styles";
import { useEffect, useState } from "react";
import { Product } from "../types";
import api from "../api";
import Products from "@/components/Products";

export default function Index() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        api.list().then(setProducts);
    }, []);

    return (
        <View style={styles.content}>
            <Text>Holis!!!</Text>

            <FlatList
                data={products}
                numColumns={2}
                keyExtractor={(item) => item.title}
                renderItem={({ item }) => (
                    <Products key={item.id} item={item} />
                )}
            />
        </View>
    );
}
