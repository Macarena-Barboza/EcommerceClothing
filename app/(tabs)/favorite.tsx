import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    ScrollView,
} from "react-native";
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
                    <FlatList
                        data={favorit}
                        keyExtractor={(item) => item.id}
                        numColumns={2}
                        renderItem={({ item }) => (
                            <View key={item.id}>
                                <Products key={item.id} item={item} />
                                <View>
                                    <TouchableOpacity
                                        onPress={() => deleteFavorite(item.id)}
                                        style={styles.btn}
                                    >
                                        <Text style={styles.btnText}>
                                            Eliminar
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                    />
                </>
            )}
        </View>
    );
}
