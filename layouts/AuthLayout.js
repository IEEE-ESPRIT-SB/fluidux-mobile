import {SafeAreaView} from "react-native-safe-area-context";
import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import SIGHT from "../assets/images/sight.png";
import SB from "../assets/images/sb.png";
import {LinearGradient} from "expo-linear-gradient";

const AuthLayout = ({ children, path, setPath }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image source={SIGHT} style={styles.headerLogo} />
                <Image source={SB} style={styles.headerLogo} />
            </View>

            <View style={styles.content}>
                <LinearGradient
                    colors={['#003164', '#005a7e']}
                    style={styles.contentHeader}>
                    <Text style={styles.contentHeaderText}>{path}</Text>
                </LinearGradient>
                <View style={styles.card}>
                    <View style={styles.tab}>
                        <Pressable
                            style={[
                                styles.tabItem,
                                {
                                    backgroundColor:
                                        path === "Sign In" ? "#fff" : "transparent",
                                },
                            ]}
                            onPress={() => setPath("Sign In")}
                        >
                            <Text style={styles.tabText}>Sign In</Text>
                        </Pressable>
                        <Pressable
                            style={[
                                styles.tabItem,
                                {
                                    backgroundColor:
                                        path === "Sign Up" ? "#fff" : "transparent",
                                },
                            ]}
                            onPress={() => setPath("Sign Up")}
                        >
                            <Text style={styles.tabText}>Sign Up</Text>
                        </Pressable>
                    </View>
                    {children}
                </View>
            </View>
        </SafeAreaView>
    );
};


export default AuthLayout

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        flexDirection: "column",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
    headerLogo: {
        height: 52,
        width: 96,
        resizeMode: "contain",
    },
    content: {
        marginTop: 30,
        flex: 1,
        justifyContent: "center"
    },
    contentHeader: {
        backgroundColor: "#115385",
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
        height: 135,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden", // Add this property
    },
    contentHeaderText: {
        fontFamily: "Inter-700",
        top: -15,
        fontSize: 34,
        fontWeight: "bold",
        color: "#fff",
    },
    card: {
        minHeight: 100,
        width: "100%",
        backgroundColor: "white",
        borderRadius: 30,
        top: -30,
        elevation: 5,
        paddingHorizontal: 15,
        paddingVertical: 30,
    },
    tab: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: 40,
        backgroundColor: "#EDEEEF",
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
    }
});