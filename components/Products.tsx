import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { router } from "expo-router";

export default function Products({ item }: any) {
    return (
        <TouchableOpacity onPress={() => router.push(`./product/${item.id}`)}>
            <View key={item.id} style={styles.products}>
                <Image source={item.image} style={styles.img} />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>$ {item.price}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    products: {
        padding: 10,
        alignItems: "center",
    },
    img: {
        width: 190,
        height: 290,
        borderRadius: 12,
    },
    title: {
        fontSize: 20,
    },
    price: {
        fontWeight: "bold",
        fontSize: 18,
    },
});
