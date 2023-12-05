import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import colors from "../assets/colors.json";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = ({ navigation }) => {
  const userProfile = {
    name: "kamel jmal",
    location: "Ariana,Tunisie",
    phoneNumber: "+1234567890",
    email: "kamel@gmail.com",
    // ... autres informations sur le profil de l'utilisateur ...
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Feather
          name="menu"
          size={32}
          color={colors.white}
          style={{ position: "absolute", top: 10, left: 10 }}
          onPress={() => navigation.openDrawer()}
        />
        <Text style={styles.headerText}>Profile</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.userInfo}>
          <View style={styles.userImageContainer}>
            <Image
              source={require("../assets/user.jpg")} // Remplacer par l'image de l'utilisateur
              style={styles.userImage}
            />
          </View>
          <Text style={styles.userName}>{userProfile.name}</Text>
          <Text style={styles.userLocation}>{userProfile.location}</Text>
          <Text style={styles.userContact}>{userProfile.phoneNumber}</Text>
          <Text style={styles.userContact}>{userProfile.email}</Text>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("EditProfile")}
          >
            <Text style={styles.buttonText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("AddValve")}
          >
            <Text style={styles.buttonText}>+ Add Valve</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.statsTable}>
          {/* Tableau pour les statistiques: Statut, Appareil, Taux de consommation */}
          {/* Vous pouvez utiliser des composants comme FlatList ou des vues pour afficher les données */}
        </View>
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
  },
  content: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 20,
  },
  userInfo: {
    alignItems: "center",
    marginBottom: 20,
  },
  userImageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: "hidden",
    backgroundColor: colors.primary, // Couleur de fond correspondant à la couleur principale
    marginBottom: 10,
  },
  userImage: {
    width: "100%",
    height: "200%",
    position: "relative",
    top: -60,
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.white,
  },
  userLocation: {
    fontSize: 16,
    color: colors.white,
  },
  userContact: {
    fontSize: 14,
    color: colors.white,
    marginBottom: 5,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    width: "100%",
  },
  button: {
    padding: 10,
    backgroundColor: colors.secondary,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    textAlign: "center",
  },
  statsTable: {
    flex: 1,
    width: "100%",
    backgroundColor: colors["grey-100"],
    borderRadius: 10,
    padding: 10,
  },
});

export default Profile;
