import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";

const SignInForm = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome Back</Text>
            <View style={styles.inputs}>
                <View>
                    <Text style={styles.label}>Email</Text>
                    <View style={styles.input}>
                        <TextInput placeholder="Enter your email" style={styles.inputText}/>
                    </View>
                </View>
                <View>
                    <Text style={styles.label}>Password</Text>
                    <View style={styles.input}>
                        <TextInput placeholder="Enter your Password" style={styles.inputText} secureTextEntry={true}/>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("MainStack")}>
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        gap: 20,
        backgroundColor: "#fff",
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontFamily: "Inter-700",
    },
    inputs: {
        flexDirection: "column",
        gap: 15,
    },
    label: {
        fontSize: 14,
        fontFamily: "Inter-600",
    },
    input: {
        borderWidth: 1,
        borderColor: "#a4a4a4",
        borderRadius: 10,
        padding: 10,
        marginTop: 5,
    },
    inputText: {
        fontSize: 16,
        fontFamily: "Inter-300",
    },
    button: {
        alignSelf: "center",
        backgroundColor: "#2050b3",
        width: "80%",
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
        fontSize: 16,
        fontFamily: "Inter-600",
    },
});

export default SignInForm;