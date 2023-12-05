import { StyleSheet, Text, View } from "react-native";
import colors from "../assets/colors.json";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import Chart from "../components/Chart";
import axios from 'axios';
import {base_url} from '../server.json';
import React, { useState , useEffect} from "react";
const Home =  ({ navigation }) => {

  
    const [predictionResponse, setPredictionResponse] = useState("");
  
    const getAIdata = async () => {
      try {
        const res = await axios.get(`${base_url}/api/predict/`);
        const responseData = res.data;
  
        // Store the response data in state
        setPredictionResponse(responseData);
  
        // Rest of your code
      
      } catch (error) {
        console.log(error);
        Alert.alert(
          "error",
          "Failed to sign in. Please check your email and password."
        );
      }
    };
  
    // Call the function to get data when the component mounts
    useEffect(() => {
      getAIdata();
    }, []);


  
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
        <Text style={styles.headerText}>Home</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.cards}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Consomption Of Water</Text>
            
            <Text style={styles.cardSubtitle}>
              6%{" "}
              <Feather name="arrow-down-right" size={14} color={colors.white} />{" "}
              from yesterday
            </Text>
            <View style={styles.circleCard}>
              <Text style={styles.circleCardText}>20 %</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Energy Created</Text>
            <Text style={styles.cardSubtitle}>
              40%
              <Feather
                name="arrow-up-right"
                size={14}
                color={colors.white}
              />{" "}
              from yesterday
            </Text>
            <View style={styles.circleCard}>
              <Text style={styles.circleCardText}>60 %</Text>
            </View>
          </View>
        </View>
        <View style={styles.card}>
        <Text style={styles.cardTitle}>{predictionResponse}{"  cl"}</Text>
</View>
        <Chart />
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
    // top: -10,
  },
  content: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 20,
  },
  cards: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  card: {
    backgroundColor: colors["grey-100"],
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 20,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
  },
  cardTitle: {
    fontSize: 14,
    fontFamily: "Inter-700",
    color: colors.white,
    textAlign: "center",
  },
  cardSubtitle: {
    fontSize: 14,
    fontFamily: "Inter-500",
    color: colors.white,
    textAlign: "center",
  },
  circleCard: {
    width: 120,
    height: 120,
    borderRadius: 100,
    backgroundColor: colors["grey-200"],
    alignItems: "center",
    justifyContent: "center",
  },
  circleCardText: {
    fontSize: 32,
    fontFamily: "Inter-900",
    color: colors.white,
    textAlign: "center",
  },
});

export default Home;
