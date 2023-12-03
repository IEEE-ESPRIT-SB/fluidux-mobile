import {SafeAreaView} from "react-native-safe-area-context";
import {Pressable, StyleSheet, Text, View} from "react-native";
import colors from "../assets/colors";

const AuthLayout = ({children, path, setPath}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>{path}</Text>
            </View>
            <View style={styles.card}>
                <View style={styles.tab}>
                    <Pressable
                        style={[styles.tabItem, {backgroundColor: path === "SIGN IN" ? colors.secondary : 'transparent'}]}
                        onPress={() => setPath("SIGN IN")}
                    >
                        <Text style={styles.tabText}>Sign In</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.tabItem, {backgroundColor: path === "SIGN UP" ? colors.secondary : 'transparent'}]}
                        onPress={() => setPath("SIGN UP")}
                    >
                        <Text style={styles.tabText}>Sign Up</Text>
                    </Pressable>
                </View>
                {children}
            </View>
        </SafeAreaView>
    );
};


export default AuthLayout

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        flexDirection: "column",
        alignItems: "center",
    },
    header: {
        backgroundColor: colors.secondary,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
        width: "100%",
        height: "25%",
        flexDirection: "column",
        justifyContent: "center",
    },
    headerText: {
        fontSize: 45,
        fontFamily: "Inter-700",
        color: colors.white,
        textAlign: "center",
        top: -20,
    },
    card: {
        backgroundColor: colors["grey-200"],
        width: "90%",
        top: -50,
        borderRadius: 30,
        paddingHorizontal: 15,
        paddingVertical: 30,
    },
    tab: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: 40,
        backgroundColor: colors["grey-100"],
        borderRadius: 10,
        padding: 5,

    },
    tabItem: {
        width: "50%",
        height: "100%",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },

    tabText: {
        fontSize: 16,
        fontWeight: "bold",
        color: colors.white
    }
});