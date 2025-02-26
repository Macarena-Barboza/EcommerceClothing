import {
    StyleSheet,
    Text,
    View,
    Image,
    ActivityIndicator,
    TouchableOpacity,
    Alert,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { Product } from "../types";
import api from "../api";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AppContext } from "../../context/appContext";
import { favContext } from "../../context/favContext";

export default function ProductDetails() {
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const { id } = useLocalSearchParams();

    const {
        selectedSize,
        setSelectedSize,
        selectedColor,
        setSelectedColor,
        addItem,
    } = useContext(AppContext);

    const {
        addFavorite,
        //  favorite,
        isFavorite,
    } = useContext(favContext);

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

    const handleSizeSelect = (siz: any) => {
        setSelectedSize(siz);
    };

    const handleColorSelected = (color: any) => {
        setSelectedColor(color);
    };

    const handleAddToCart = () => {
        if (selectedColor === null || selectedSize === null) {
            Alert.alert("Important", "Choose a Size and Color, to continue", [
                {
                    text: "OK",
                },
            ]);
        } else {
            // Solo pasamos la cantidad como un número
            const count = 1; // O puedes permitir que el usuario elija la cantidad
            addItem(
                {
                    ...product,
                    size: selectedSize, // Asegúrate de pasar el tamaño correcto
                    color: selectedColor, // Asegúrate de pasar el color correcto
                },
                count
            );

            router.navigate("/cart");
            setSelectedColor(null);
            setSelectedSize(null);
        }
    };

    return (
        <>
            <View style={styles.content}>
                <Image source={product.image} style={styles.img} />
                <TouchableOpacity onPress={() => addFavorite(product)}>
                    <Ionicons
                        name={
                            isFavorite(product)
                                ? "heart-sharp"
                                : "heart-outline"
                        }
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
                    <View style={{ width: 150, marginBottom: 9 }}>
                        <Text style={styles.title}>Size</Text>
                        <View style={styles.contentColor}>
                            {product.size.map((siz) => {
                                return (
                                    <TouchableOpacity
                                        key={siz}
                                        onPress={() => handleSizeSelect(siz)}
                                        style={[
                                            selectedSize === siz
                                                ? styles.sizeSeleted
                                                : styles.sizee,
                                        ]}
                                    >
                                        <Text
                                            style={
                                                selectedSize === siz && {
                                                    color: "#fff",
                                                    fontWeight: "bold",
                                                }
                                            }
                                        >
                                            {siz}
                                        </Text>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                    </View>

                    <View style={{ width: 150, height: 80 }}>
                        <Text style={styles.title}>Color</Text>
                        <View style={styles.contentColor}>
                            {product.colors.map((color) => {
                                return (
                                    <TouchableOpacity
                                        key={color}
                                        onPress={() =>
                                            handleColorSelected(color)
                                        }
                                        style={[
                                            styles.color,
                                            {
                                                backgroundColor: color,
                                                borderWidth:
                                                    selectedColor === color
                                                        ? 3
                                                        : 0,
                                                borderColor:
                                                    selectedColor === color
                                                        ? "#00000099"
                                                        : "transparent",
                                            },
                                        ]}
                                    />
                                );
                            })}
                        </View>
                    </View>
                </View>
            </View>

            <TouchableOpacity
                style={styles.btn}
                onPress={() => handleAddToCart()}
            >
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
    contentSize: {
        flexDirection: "row",
        gap: 20,
    },
    contentColor: {
        justifyContent: "flex-start",
        flexDirection: "row",
        gap: 20,
        marginTop: 7,
    },
    // fav: {
    //     position: "absolute",
    //     top: 30,
    //     right: 33,
    //     backgroundColor: "#eeeeee",
    //     borderRadius: "50%",
    //     padding: 7,
    // },
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
    sizee: {
        backgroundColor: "#cccccc90",
        paddingHorizontal: 12,
        paddingVertical: 7,
        borderRadius: "30%",
        // width: 32,
    },
    sizeSeleted: {
        backgroundColor: "crimson",
        paddingHorizontal: 12,
        paddingVertical: 7,
        borderRadius: "30%",
    },
    color: {
        height: 32,
        width: 32,
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
