import {
    StyleSheet,
    Text,
    View,
    Image,
    ActivityIndicator,
    TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { Product } from "../types";
import api from "../api";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function ProductDetails() {
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const { id } = useLocalSearchParams();
    const [favorite, setFavorite] = useState(false);

    useEffect(() => {
        setLoading(true);
        api.list().then((data) => {
            const product = data.find((p) => p.id.toString() === id.toString());
            setProduct(product || null);
            setLoading(false);
        });
    }, [id]);

    if (loading) {
        return <ActivityIndicator size={"large"} color={"crimson"} />;
    }

    if (!product) {
        return <Text>No product found</Text>;
    }
    function favorit() {
        setFavorite(!true);
    }

    return (
        <>
            <View style={styles.content}>
                <Image source={product.image} style={styles.img} />
                <TouchableOpacity onPress={favorit} style={styles.fav}>
                    <Ionicons
                        name={favorite ? "heart-sharp" : "heart-outline"}
                        size={35}
                        color="crimson"
                    />
                </TouchableOpacity>
                <View style={styles.contentText}>
                    <Text style={styles.title}>{product.title}</Text>
                    <Text style={styles.price}>$ {product.price}</Text>
                </View>
                <Text style={styles.description}>{product.description}</Text>
                <View style={styles.contentText}>
                    <View style={{ width: 150 }}>
                        <Text style={styles.title}>Size</Text>
                        <View style={styles.contentText}>
                            <TouchableOpacity style={styles.size}>
                                <Text>S</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.sizeSeleted}>
                                <Text style={styles.sizeSeletedText}>M</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text>L</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ width: 150 }}>
                        <Text style={styles.title}>Color</Text>
                        <View style={styles.contentText}>
                            <TouchableOpacity style={styles.color} />
                            <TouchableOpacity style={styles.color} />
                            <TouchableOpacity style={styles.color} />
                        </View>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Agregar Carrito</Text>
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: "center",
        padding: 17,
    },
    img: {
        width: 400,
        height: 550,
        borderRadius: 15,
    },
    contentText: {
        width: "100%",
        padding: 7,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    fav: {
        position: "absolute",
        top: 30,
        right: 33,
        backgroundColor: "#eeeeee",
        borderRadius: "50%",
        padding: 7,
    },
    title: {
        fontSize: 23,
        fontWeight: "bold",
    },
    price: {
        fontSize: 18,
        fontWeight: "bold",
        paddingRight: 5,
    },
    description: {
        fontSize: 16,
        color: "#33333398",
        padding: 8,
    },
    size: {
        backgroundColor: "#cccccc90",
        paddingHorizontal: 12,
        paddingVertical: 7,
        borderRadius: "30%",
    },
    sizeSeleted: {
        backgroundColor: "crimson",
        paddingHorizontal: 12,
        paddingVertical: 7,
        borderRadius: "30%",
    },
    sizeSeletedText: {
        color: "#fff",
        fontWeight: "bold",
    },
    color: {
        borderWidth: 1,
        height: 30,
        width: 30,
        borderRadius: "50%",
    },
    btn: {
        width: "90%",
        marginHorizontal: "auto",
        marginVertical: 20,
        backgroundColor: "crimson",
        paddingHorizontal: 10,
        paddingVertical: 11,
        borderRadius: 20,
    },
    btnText: {
        textAlign: "center",
        color: "#fff",
        fontSize: 18,
    },
});
