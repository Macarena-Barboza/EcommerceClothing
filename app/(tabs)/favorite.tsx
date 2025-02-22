import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React, { useContext } from "react";
import styles from "../styles";
import { Link } from "expo-router";
import { favContext } from "@/context/FavContext";

export default function favorite() {
    const { favorit, deleteFavorite } = useContext(favContext);

    return (
        <View style={styles.content}>
            <View>
                {favorit.length === 0 ? (
                    <Text style={{ textAlign: "center" }}>
                        you don’t have a favorite
                    </Text>
                ) : (
                    <>
                        {favorit.map((favo: any) => {
                            return (
                                <View key={favo}>
                                    <View>
                                        <Image
                                            source={favo.image}
                                            style={{ width: 200, height: 200 }}
                                        />
                                        <Text>{favo.title}</Text>
                                        <Text>{favo.price}</Text>
                                    </View>
                                    <View>
                                        <TouchableOpacity
                                            onPress={() =>
                                                deleteFavorite(favo.id)
                                            }
                                            style={{
                                                width: 110,
                                                gap: 8,
                                                alignItems: "center",
                                                padding: 9,
                                            }}
                                        >
                                            <Text>Eliminar</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            );
                        })}
                    </>
                )}
            </View>
        </View>
    );
}
