import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import colors from "../assets/colors.json";
import {SafeAreaView} from "react-native-safe-area-context";
import {Feather} from "@expo/vector-icons";
import {useState} from "react";

const AddValve = ({navigation}) => {
    const [valveID, setValveID] = useState("");
    const [location, setLocation] = useState("");

    const handleSubmit = () => {
        console.log("Valve ID: " + valveID);
        console.log("Location: " + location);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Feather
                    name="menu" size={32} color={colors.white}
                    style={{position: "absolute", top: 10, left: 10}}
                    onPress={() => navigation.openDrawer()}
                />
                <Text style={styles.headerText}>Add Valve</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.card}>
                    <View style={styles.inputs}>
                        <View>
                            <Text style={styles.label}>Valve ID</Text>
                            <View style={styles.input}>
                                <TextInput
                                    value={valveID}
                                    onChangeText={setValveID}
                                    placeholderTextColor={colors.placeholder}
                                    placeholder="Valve ID"
                                    style={styles.inputText}/>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.label}>Location</Text>
                            <View style={styles.input}>
                                <TextInput
                                    value={location}
                                    onChangeText={setLocation}
                                    placeholderTextColor={colors.placeholder}
                                    placeholder="Location"
                                    style={styles.inputText}
                                   />
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("MainStack")}>
                        <Text style={styles.buttonText} onPress={handleSubmit}>Add Valve</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: "center",
    },
    header: {
        height: "20%",
        backgroundColor: colors.secondary,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
    },
    headerText: {
        fontSize: 36,
        fontFamily: "Inter-900",
        color: colors.white,
        textAlign: "center",
        // top: -10,
    },
    content: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "space-around",
        padding: 20,

    },
    card: {
        backgroundColor: colors["grey-200"],
        width: "90%",
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 30,
        gap: 40,
    },

    inputs: {
        flexDirection: "column",
        gap: 20,
    },
    label: {
        fontSize: 14,
        fontFamily: "Inter-600",
        color: colors.white,
    },
    input: {
        borderWidth: 1,
        borderColor: colors.white,
        backgroundColor: colors["grey-100"],
        borderRadius: 5,
        padding: 10,
        marginTop: 5,
    },
    inputText: {
        fontSize: 16,
        fontFamily: "Inter-300",
        color: colors.white,

    },
    button: {
        alignSelf: "center",
        backgroundColor: colors.secondary,
        width: "80%",
        padding: 15,
        borderRadius: 10,
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
        fontSize: 16,
        fontFamily: "Inter-600",
    },

});

export default AddValve;