import { ImageSourcePropType } from "react-native";

export interface Product {
    id: number | string[];
    title: string;
    image: ImageSourcePropType;
    image1: ImageSourcePropType;
    price: number;
    description: string;
    size: string[];
    colors: string[];
}
