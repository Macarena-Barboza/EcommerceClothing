import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { AppContext } from "@/context/appContext";
import styles from "../styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";

export default function cart() {
    const {
        cart,
        clearCart,
        deleteItem,
        getTotalItemPriceInCart,
        updateItemCount,
    } = useContext(AppContext);

    let total = getTotalItemPriceInCart();

    return (
        <View style={{ marginTop: 30 }}>
            {cart.length === 0 ? (
                <>
                    <Text style={{ textAlign: "center" }}>Empty Cart</Text>
                    <TouchableOpacity
                        style={[styles.btn, { marginTop: 70 }]}
                        onPress={() => router.navigate("/")}
                    >
                        <Text style={styles.btnText}>Comprar</Text>
                    </TouchableOpacity>
                </>
            ) : (
                <>
                    {cart.map((carrito: any) => {
                        const uniqueKey = `${carrito.id}-${carrito.size}-${carrito.color}`;
                        return (
                            <View key={uniqueKey} style={styles.contentCart}>
                                <Image
                                    source={carrito.image}
                                    style={{
                                        width: 100,
                                        height: 100,
                                        borderRadius: 8,
                                    }}
                                />
                                <View style={styles.contentCartText}>
                                    <Text
                                        style={{
                                            fontWeight: "bold",
                                            fontSize: 15,
                                        }}
                                    >
                                        {carrito.title}
                                    </Text>
                                    <Text>size: {carrito.size}</Text>
                                    <Text
                                        style={{
                                            width: 20,
                                            height: 20,
                                            borderWidth: 1,
                                            borderRadius: 30,
                                            backgroundColor: carrito.color,
                                        }}
                                    />
                                    <Text>
                                        ${" "}
                                        {(
                                            carrito.price * carrito.count
                                        ).toFixed(3)}
                                    </Text>
                                    <View style={styles.contentCart}>
                                        <TouchableOpacity
                                            style={styles.btnSum}
                                            onPress={() =>
                                                updateItemCount(
                                                    carrito.id,
                                                    carrito.size,
                                                    carrito.color,
                                                    "decrease"
                                                )
                                            }
                                        >
                                            <Text>-</Text>
                                        </TouchableOpacity>
                                        <Text>{carrito.count}</Text>
                                        <TouchableOpacity
                                            style={styles.btnSum}
                                            onPress={() =>
                                                updateItemCount(
                                                    carrito.id,
                                                    carrito.size,
                                                    carrito.color,
                                                    "increase"
                                                )
                                            }
                                        >
                                            <Text>+</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{ justifyContent: "center" }}>
                                    <TouchableOpacity
                                        style={{
                                            width: 50,
                                            height: 35,
                                        }}
                                        onPress={() =>
                                            deleteItem(
                                                carrito.id,
                                                carrito.size,
                                                carrito.color
                                            )
                                        }
                                    >
                                        <Ionicons
                                            name={"trash"}
                                            size={28}
                                            color={"crimson"}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        );
                    })}

                    <Text
                        style={{
                            textAlign: "right",
                            paddingRight: 50,
                            paddingVertical: 20,
                            fontSize: 18,
                        }}
                    >
                        TOTAL:{" "}
                        <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                            $ {isNaN(total) ? 0 : total.toFixed(3)}
                        </Text>
                    </Text>

                    <TouchableOpacity
                        style={[
                            styles.btn,
                            {
                                height: 40,
                                justifyContent: "center",
                                width: "80%",
                            },
                        ]}
                        onPress={() => router.navigate("/")}
                    >
                        <Text style={styles.btnText}>Pagar</Text>
                    </TouchableOpacity>
                </>
            )}
        </View>
    );
}
