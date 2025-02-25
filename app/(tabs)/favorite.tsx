import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import styles from "../styles";
import { favContext } from "@/context/favContext";
import Products from "@/components/Products";

export default function favorite() {
    const { favorit, deleteFavorite } = useContext(favContext);

    return (
        <View style={styles.content}>
            {favorit.length === 0 ? (
                <Text style={{ textAlign: "center" }}>
                    you don’t have a favorite
                </Text>
            ) : (
                <>
                    {favorit.map((favo: any) => {
                        return (
                            <>
                                <Products key={favo.id} item={favo} />
                                <View>
                                    <TouchableOpacity
                                        onPress={() => deleteFavorite(favo.id)}
                                        style={styles.btn}
                                    >
                                        <Text style={styles.btnText}>
                                            Eliminar
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </>
                        );
                    })}
                </>
            )}
        </View>
    );
}
