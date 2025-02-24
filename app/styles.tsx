import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
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
