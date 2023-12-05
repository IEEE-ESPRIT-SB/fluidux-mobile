import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../assets/colors.json";
import { SafeAreaView } from "react-native-safe-area-context";

const EditProfile = () => {
    const [name, setName] = useState("kamrl jmal");
    const [location, setLocation] = useState("Ariana,Tunisie");
    const [phoneNumber, setPhoneNumber] = useState("+1234567890");
    const [email, setEmail] = useState("kamel@gmail.com");

    const handleSave = () => {
        // Ajoutez ici la logique pour enregistrer les modifications du profil
        // Par exemple : appeler une fonction pour mettre à jour les données sur le serveur
        // Une fois les modifications enregistrées, vous pouvez naviguer vers la page de profil
        // En utilisant la navigation fournie par React Navigation
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.headerText}>Edit Profile</Text>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Name:</Text>
                    <TextInput
                        style={styles.input}
                        value={name}
                        onChangeText={(text) => setName(text)}
                    />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Location:</Text>
                    <TextInput
                        style={styles.input}
                        value={location}
                        onChangeText={(text) => setLocation(text)}
                    />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Phone Number:</Text>
                    <TextInput
                        style={styles.input}
                        value={phoneNumber}
                        onChangeText={(text) => setPhoneNumber(text)}
                    />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Email:</Text>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </View>
                <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                    
                    <Text style={styles.saveButtonText}>Save Changes</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: "center",
    },
    content: {
        flex: 1,
        width: "80%",
        justifyContent: "center",
    },
    headerText: {
        fontSize: 24,
        fontWeight: "bold",
        color: colors.white,
        marginBottom: 20,
        textAlign: "center",
    },
    formGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 18,
        color: colors.white,
        marginBottom: 5,
    },
    input: {
        backgroundColor: colors.white,
        padding: 10,
        borderRadius: 5,
    },
    saveButton: {
        backgroundColor: colors.secondary,
        padding: 12,
        borderRadius: 5,
    },
    saveButtonText: {
        color: colors.white,
        fontSize: 16,
        textAlign: "center",
    },
});

export default EditProfile;
