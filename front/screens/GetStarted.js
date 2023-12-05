import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import SIGHT from "../assets/images/sight_w.png";
import SB from "../assets/images/sb_w.png";
import Logo from "../assets/Logo_W.png";
import colors from "../assets/colors.json";
import {StatusBar} from "expo-status-bar";

const GetStarted = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            <View style={styles.header}>
                <Image source={SIGHT} style={styles.headerLogo}/>
                <Image source={SB} style={styles.headerLogo}/>
            </View>
            <View style={styles.content}>
                <Image source={Logo} style={styles.logo}/>
                <View style={styles.descContainer}>
                    <View>
                        <Text style={styles.subtitle}>Welcome to </Text>
                        <Text style={styles.title}>FLUIDUX Mobile APP</Text>
                    </View>
                    <Text style={styles.description}>High water and electricity bills ? No worries ! 
FluiDux is an application that allows you to monitor your consumption while calculating the flow rate of your valve and generate some energy ! </Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Auth")}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        paddingHorizontal: 20,
        alignItems: "center",
        paddingVertical: 10,
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
    logo: {
        height: 250,
        width: 250,
        resizeMode: "contain",
        alignSelf: "center",
    },
    descContainer: {
        flexDirection: "column",
        gap: 15,
        paddingHorizontal: 30,
        paddingVertical: 20,
        borderRadius: 10,
        backgroundColor: colors["grey-200"],
        borderWidth: 1,
        borderColor: colors.white,
    },
    title: {
        fontSize: 20,
        fontFamily: "Inter-700",
        color: colors.white
    },
    subtitle: {
        fontSize: 16,
        fontFamily: "Inter-300",
        color: colors.white

    },
    description: {
        fontSize: 14,
        fontFamily: "Inter-300",
        textAlign: "justify",
        color: colors.white
    },
    content: {
        flex: 1,
        width: "100%",
        justifyContent: "space-between",
        marginVertical: 25
    },
    button: {
        backgroundColor: colors.secondary,
        width: "100%",
        padding: 15,
        borderRadius: 20,
        marginTop: 20,
    },
    buttonText: {
        color: colors.white,
        textAlign: "center",
        fontSize: 20,
        fontFamily: "Inter-600"
    },
});

export default GetStarted;