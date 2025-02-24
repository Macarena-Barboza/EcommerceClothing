import { View, Text } from "react-native";
import styles from "./styles";
import { Link, Stack } from "expo-router";

export default function notFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: "Not Found" }} />
            <View style={styles.content}>
                <Text>Ups! no se encuentra</Text>
                <Link href="/" style={[styles.btn, styles.btnText]}>
                    Volver a Home
                </Link>
            </View>
        </>
    );
}
