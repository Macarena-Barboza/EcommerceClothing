import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    contentCategory: {
        // flexDirection: "row",
        // gap: 12,
        margin: 5,
        width: "92%",
    },
    contentCategoryText: {
        fontWeight: "bold",
        color: "#00000090",
        fontSize: 15,
        borderWidth: 1,
        borderColor: "#00000070",
        borderRadius: 12,
        paddingVertical: 4,
        paddingHorizontal: 31,
        marginHorizontal: 9,
    },
    contentCategoryTextSelected: {
        // backgroundColor: "crimson",
        backgroundColor: "#9e2561",
        fontWeight: "bold",
        color: "white",
        fontSize: 15,
        borderWidth: 1,
        // borderColor: "red",
        borderColor: "#9e1231",
        borderRadius: 12,
        paddingVertical: 4,
        paddingHorizontal: 31,
        marginHorizontal: 9,
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
        justifyContent: "space-between",
        gap: 30,
        marginVertical: 8,
        marginHorizontal: 30,
    },
    contentCartText: {
        justifyContent: "center",
    },
});

export default styles;
