import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    contentCategory: {
        flexDirection: "row",
        gap: 12,
        margin: 5,
    },
    contentCategoryText: {
        fontWeight: "bold",
        color: "#00000070",
        fontSize: 15,
        borderWidth: 1,
        borderColor: "#00000070",
        borderRadius: 12,
        paddingVertical: 3,
        paddingHorizontal: 24,
        marginHorizontal: 10,
    },
    btn: {
        width: 180,
        marginHorizontal: "auto",
        marginVertical: 2,
        backgroundColor: "crimson",
        paddingVertical: 3,
        borderRadius: 20,
    },
    btnText: {
        textAlign: "center",
        color: "#fff",
        fontSize: 18,
    },
    btnSum: {
        width: 25,
        height: 25,
        borderRadius: 5,
        backgroundColor: "#ccc",
        alignItems: "center",
        justifyContent: "center",
    },
    contentCart: {
        flexDirection: "row",
        // backgroundColor: "red",
        justifyContent: "center",
        gap: 30,
        marginVertical: 8,
    },
    contentCartText: {
        justifyContent: "center",
    },
});

export default styles;
