import {StyleSheet, Text, TextInput, TouchableOpacity, View, Alert} from "react-native";
import colors from "../assets/colors";
import React, {useState} from 'react';
import axios from 'axios';
import {base_url} from '../server.json';

const SignInForm = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async () => {
        const user = {
            email: email,
            password: password,
        };


        try {
            const res = await axios.post(`${base_url}/api/check_credentials/`, user);
            if (res.data.authenticated) {
                navigation.navigate('MainStack');
            } else {
                Alert.alert('Authentication Failed', 'Invalid email or password');
            }

        } catch (error) {
            console.log(error)
            Alert.alert('Error', 'Failed to sign in. Please check your email and password.');
        }

    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome Back</Text>
            <View style={styles.inputs}>
                <View>
                    <Text style={styles.label}>Email</Text>
                    <View style={styles.input}>
                        <TextInput
                            placeholderTextColor={colors.placeholder}
                            placeholder="Email"
                            style={styles.inputText}
                            onChangeText={(text) => setEmail(text)}
                        />
                    </View>
                </View>
                <View>
                    <Text style={styles.label}>Password</Text>
                    <View style={styles.input}>
                        <TextInput
                            placeholderTextColor={colors.placeholder}
                            placeholder="Password"
                            style={styles.inputText}
                            secureTextEntry={true}
                            onChangeText={(text) => setPassword(text)}
                        />
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        gap: 20,
        padding: 20,
        marginTop: 20,
    },
    title: {
        fontSize: 20,
        fontFamily: "Inter-700",
        color: colors.white
    },
    inputs: {
        flexDirection: "column",
        gap: 15,
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