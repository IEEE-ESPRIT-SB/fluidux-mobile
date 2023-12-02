import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import SIGHT from "../assets/images/sight.png";
import SB from "../assets/images/sb.png";
import Logo from "../assets/Logo.png";

const GetStarted = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image source={SIGHT} style={styles.headerLogo}/>
                <Image source={SB} style={styles.headerLogo}/>
            </View>
            <View style={styles.content}>
                <Image source={Logo} style={styles.logo}/>
                <View style={{flexDirection: "column", gap: 15}}>
                    <View>
                        <Text style={{fontSize: 24, fontWeight: "300", marginTop: 20}}>Welcome to </Text>
                        <Text style={{fontSize: 24, fontWeight: "bold"}}>FLUIDUX Mobile APP</Text>
                    </View>
                    <Text style={{fontSize: 16, fontWeight: "300", }}>Lorem ipsum dolor sit amet consectetur. Pretium nulla convallis habitasse ornare magna. Neque massa auctor urna dis dolor accumsan elementum leo vel. Et libero nec vitae egestas dolor imperdiet duis condimentum. Porttitor et vitae nibh blandit volutpat vel tempor ipsum massa. </Text>
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
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        alignItems: "center",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginTop: 20,

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
    content: {
        flex: 1,
        width: "100%",
        justifyContent: "space-between",
        marginVertical: 25
    },
    button: {
        backgroundColor: "#115385",
        width: "100%",
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default GetStarted;