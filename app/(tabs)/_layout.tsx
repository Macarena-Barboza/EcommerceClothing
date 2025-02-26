import { AppContext } from "@/context/appContext";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import { useContext } from "react";
import { Image, View } from "react-native";

export default function TabsLayout() {
    const { getTotalItemInCart } = useContext(AppContext);
    let notifi = getTotalItemInCart();

    return (
        <Tabs
            screenOptions={{
                headerStyle: {
                    backgroundColor: "pink",
                },
                headerTintColor: "white",
                headerTitleAlign: "center",
                headerTitleStyle: {},
                headerLeft: () => (
                    <View style={{ paddingLeft: 20 }}>
                        <Image
                            source={require("@/assets/clothing/maniqui.png")}
                            style={{
                                width: 21,
                                height: 50,
                            }}
                        />
                    </View>
                ),
                headerRight: () => (
                    <View style={{ paddingRight: 20 }}>
                        <Ionicons name={"search"} size={28} color={"black"} />
                    </View>
                ),
                tabBarActiveTintColor: "#9e2561",
                tabBarInactiveTintColor: "#00000050",
                tabBarStyle: {
                    backgroundColor: "pink",
                },
                tabBarShowLabel: false,
            }}
        >
            <Tabs.Screen
                name="favorite"
                options={{
                    headerTitle: "Favorite",
                    tabBarIcon: ({ color }) => (
                        <Ionicons name={"heart"} size={32} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="index"
                options={{
                    headerTitle: "Clothing",
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="home" size={32} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="cart"
                options={{
                    headerTitle: "Cart",
                    tabBarBadge: notifi,
                    tabBarBadgeStyle: { backgroundColor: "crimson" },
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="cart" size={32} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
