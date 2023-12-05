import React from "react";
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import colors from "../assets/colors.json";
import {SafeAreaView} from "react-native-safe-area-context";
import {AntDesign, Feather, Ionicons} from "@expo/vector-icons";
import productImage from "../assets/images/Products.jpg";
const productsData = [
    {id: 1, name: "Product 1", price: "10", image: require("../assets/1.jpg"), description: "Bouteilles d'eau réutilisables : Ce sont des bouteilles que tu peux remplir avec de l'eau et réutiliser encore et encore."},
    {id: 2, name: "Product 2", price: "20", image: require("../assets/2.jpg"), description: " Sacs réutilisables : Ce sont des sacs en tissu ou en toile que tu peux utiliser pour faire tes courses."},
    {id: 3, name: "Product 3", price: "15", image: require("../assets/3.jpg"), description: "Produits de nettoyage écologiques : Ce sont des produits de nettoyage qui sont fabriqués à partir d'ingrédients naturels et respectueux de l'environnement."},
    {id: 4, name: "Product 4", price: "12", image: require("../assets/4.jpg"), description: "Produits de beauté naturels : Ce sont des produits de beauté fabriqués à partir d'ingrédients naturels, comme des huiles essentielles et des extraits de plantes."},
    {id: 5, name: "Product 5", price: "12", image: require("../assets/5.jpg"), description: "Ampoules LED : Ce sont des ampoules qui utilisent la technologie LED, ce qui les rend plus écoénergétiques."},
    {id: 6, name: "Product 6", price: "12", image: require("../assets/6.jpg"), description: "Produits alimentaires biologiques : Ce sont des aliments qui sont cultivés sans l'utilisation de pesticides ou d'engrais chimiques."},
    {id: 7, name: "Product 7", price: "12", image: require("../assets/7.jpg"), description: "Vêtements durables : Ce sont des vêtements fabriqués à partir de matériaux durables, comme le coton biologique ou le lin. "},
    {id: 8, name: "Product 8", price: "12", image: require("../assets/8.jpg"), description: "Vélos électriques : Les velos électriques sont des moyens de transport écologiques et durables."},
];

const Product = ({ name, price, image, description }) => {
    return (
        <View style={styles.card}>
            <Image source={productImage} style={styles.productImage} />
            <View>
                <Text style={styles.cardTitle}>{name}</Text>
                <Text style={styles.cardSubtitle}>{description}</Text>
            </View>
            <View style={styles.bottom}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Buy</Text>
                </TouchableOpacity>
                <Text style={styles.coin}>{price} coins</Text>
            </View>
        </View>
    );
};

const Shop = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.topHeader}>
                    <Feather
                        name="menu"
                        size={32}
                        color={colors.white}
                        onPress={() => navigation.openDrawer()}
                    />
                    <View style={styles.middleHeader}>
                        <Ionicons name="wallet-outline" size={32} color="white" />
                        <Text style={{ fontSize: 20, color: colors.white }}>500</Text>
                    </View>
                    <AntDesign name="shoppingcart" size={32} color="white" />
                </View>
                <Text style={styles.headerText}>Shop</Text>
            </View>
            <ScrollView
                bounces={false}
                contentContainerStyle={styles.cards}
                horizontal={false} // Set this to false to scroll vertically
            >
                {productsData.map((product, index) => (
                    <Product
                        key={index}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                        description={product.description}
                    />
                ))}
            </ScrollView>
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
    },
    topHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    middleHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
    },
    headerText: {
        fontSize: 36,
        fontFamily: "Inter-900",
        color: colors.white,
        textAlign: "center",
        top: 10
    },
    cards: {
        flexDirection: "row", // Display products in a row
        flexWrap: "wrap", // Wrap to the next row if the items don't fit
        justifyContent: "space-between", // Add space between products
        paddingHorizontal: 10, // Add some horizontal padding
        width: "95%",
        marginTop: 20, // Add top margin to separate from the header
    },
    card: {
        backgroundColor: colors["grey-100"],
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 15,
        flexDirection: "column",
        width: "48%", // Set the width to 48% for two columns
        marginBottom: 20,
        gap: 20,
    },
    cardTitle: {
        fontSize: 16,
        fontFamily: "Inter-700",
        color: colors.white,
        textAlign: "left",
    },
    cardSubtitle: {
        fontSize: 12,
        fontFamily: "Inter-300",
        color: colors.white,
        textAlign: "justify",
    },
    productImage: {
        width: "100%",
        height: 120,
        borderRadius: 15,
        resizeMode: "contain",
    },
    bottom: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
    },
    button: {
        borderRadius: 10,
        borderColor: colors.secondary,
        borderWidth: 1,
        width: "55%",
        paddingVertical: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: colors.secondary,
        fontSize: 12,
        fontFamily: "Inter-600",
    },
    coin: {
        fontSize: 12,
        fontFamily: "Inter-600",
        color: colors.warning,
    },
});

export default Shop;
