// import { useRouter } from "next/router";
import { View } from "react-native";
import Products from "./Products";
import { useRouter } from "expo-router";

export default function ProductsCategory({ categ }: any) {
    const router = useRouter();
    const { category } = router.query; // Accedemos al parámetro de la categoría en la URL

    // Filtramos los productos por la categoría
    const filteredProducts = categ.filter(
        (product: any) => product.category === category
    );

    return (
        <View>
            {filteredProducts.map((product: any) => (
                <Products item={product} key={product.id} />
            ))}
        </View>
    );
}
