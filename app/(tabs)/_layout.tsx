import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerStyle: {
                    backgroundColor: "pink",
                },
                headerTintColor: "white",
                tabBarActiveTintColor: "crimson",
                tabBarStyle: {
                    backgroundColor: "#f1d8e0",
                },
                tabBarShowLabel: false,
            }}
        >
            <Tabs.Screen
                name="favorite"
                options={{
                    headerTitle: "Favorite",
                    tabBarIcon: ({ color }) => (
                        <Ionicons name={"heart"} size={28} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="index"
                options={{
                    headerTitle: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="home" size={28} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="cart"
                options={{
                    headerTitle: "Cart",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="cart" size={29} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
