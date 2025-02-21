import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function Layout() {
    return (
        <>
            <StatusBar style="dark" />
            <Stack>
                <Stack.Screen
                    name="(tabs)"
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="product/[id]"
                    options={{ title: "Product Details" }}
                />
                <Stack.Screen name="+not-found" />
            </Stack>
        </>
    );
}
