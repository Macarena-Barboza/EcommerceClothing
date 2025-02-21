import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#8f8ab1",
                },
                headerTintColor: "white",
                tabBarActiveTintColor: "#8f8ad1",
                tabBarStyle: {
                    backgroundColor: "#f1d8e0",
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    headerTitle: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="home" size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    headerTitle: "About",
                    tabBarIcon: ({ focused, color }) => (
                        <Ionicons
                            name={
                                focused ? "settings-sharp" : "settings-outline"
                            }
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="camera"
                options={{
                    headerTitle: "Camera",
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="camera" size={24} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
