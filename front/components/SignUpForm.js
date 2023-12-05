import {Alert, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import colors from "../assets/colors.json";
import React, {useState} from "react";
import {base_url} from '../server.json';
import axios from "axios";


const SignUpForm = ({navigation, setPath}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState(''); // Added for user's name
    const [error, setError] = useState('');
    const [errorColor, setErrorColor] = useState('#FF0000');

    const handleSignUp = async () => {
        // Perform validation here if needed

        // Check if passwords match
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            setErrorColor('#FF0000');
            return;
        }

        // Check if the email is in a valid format
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailRegex.test(email)) {
            setError('Invalid email format');
            setErrorColor('#FF0000');
            alert('Invalid email format');
            return;
        }

        // Clear previous error messages
        setError('');

        // Create a user object to send to the backend
        const user = {
            email: email,
            password: password,
            name: 'user', // Use the user's name from the input field
        };

        try {
            const res = await axios.post(`${base_url}/api/users/create/`, user);
            Alert.alert('Success', 'Account created successfully');
            setPath('SIGN IN');
            navigation.navigate('Auth');
        } catch (error) {
            console.log(error);
            alert('Failed to create account');
        }

        // try {
        //   const response = await fetch(`${base_url}/api/users/create/`, {
        //     method: 'POST',
        //     headers: {
        //       Accept: 'application/json',
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(user), // Simplify the body part
        //   });
        //
        //   if (!response.ok) {
        //     throw new Error(`HTTP error! Status: ${response.status}`);
        //   }
        //
        //   const responseData = await response.json();
        //   console.log(JSON.stringify(responseData));
        // } catch (error) {
        //   console.error('Error:', error);
        // }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create new account</Text>
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
                <View>
                    <Text style={styles.label}>Confirm Password</Text>
                    <View style={styles.input}>
                        <TextInput
                            placeholderTextColor={colors.placeholder}
                            placeholder="Confirm Password"
                            style={styles.inputText}
                            secureTextEntry={true}
                            onChangeText={(text) => setConfirmPassword(text)}
                        />
                    </View>
                </View>
                {/* <View>
            <Text style={styles.label}>Name</Text>
            <View style={styles.input}>
              <TextInput
                placeholderTextColor={colors.placeholder}
                placeholder="Name"
                style={styles.inputText}
                onChangeText={(text) => setName(text)}
              />
            </View>
          </View> */}
                {error ? <Text style={{...styles.errorText, color: errorColor}}>{error}</Text> : null}
            </View>
            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                <Text style={styles.buttonText}>Sign up</Text>
            </TouchableOpacity>
        </View>
    );
};


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

export default SignUpForm;