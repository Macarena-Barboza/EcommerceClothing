import { View, Text } from "react-native";
import React from "react";
import styles from "../styles";
import { Link } from "expo-router";

export default function about() {
    return (
        <View style={styles.content}>
            <Text>about</Text>
            <View>
                <Link href={"./contact"} style={styles.btn}>
                    contact
                </Link>
            </View>
        </View>
    );
}
