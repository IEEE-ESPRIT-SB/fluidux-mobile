import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../assets/colors.json";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import NotificationItem from "../components/NotificationItem";

const Notifications = ({ navigation }) => {
  const [notifications, setNotifications] = useState([
    {
      type: "Warning",
      message: "Your water usage increased",
      valveID: "Valve_1",
      location: "Location_1",
      dateTime: "2023-12-03T12:34:56.789Z",
    },
    {
      type: "Error",
      message: "Valve 2 is not working",
      valveID: "Valve_2",
      location: "Location_2",
      dateTime: "2023-12-02T12:34:56.789Z",
    },
    {
      type: "Error",
      message: "Valve 3 is not working",
      valveID: "Valve_3",
      location: "Location_3",
      dateTime: "2023-12-3T19:25:56.789Z",
    },
    {
      type: "Warning",
      message: "Your water usage increased",
      valveID: "Valve_4",
      location: "Location_4",
      dateTime: "2023-12-02T20:00:00.000Z",
    },
    {
      type: "Error",
      message: "Valve 5 is not working",
      valveID: "Valve_5",
      location: "Location_5",
      dateTime: "2023-12-3T19:24:56.789Z",
    },
    {
      type: "Error",
      message: "Valve 6 is not working",
      valveID: "Valve_6",
      location: "Location_6",
      dateTime: "2023-12-3T19:20:56.789Z",
    },
  ]);

  const handleClear = () => {
    setNotifications([]);
  };

  const deleteNotification = (id) => {
    let temp = [...notifications];
    temp.splice(id, 1);
    setNotifications(temp);
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
        <Text style={styles.headerText}>NOTIFICATIONS</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.card}>
          <ScrollView style={{ width: "100%" }}>
            {notifications.map((notification, index) => (
              <NotificationItem
                key={index}
                id={index}
                value={notification.message}
                type={notification.type}
                valveID={notification.valveID}
                location={notification.location}
                dateTime={notification.dateTime}
                deleteNotification={deleteNotification}
              />
            ))}
          </ScrollView>
          <TouchableOpacity style={styles.button} onPress={handleClear}>
            <Text style={styles.buttonText}>Clear</Text>
          </TouchableOpacity>
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
    gap: 50,
    paddingBottom: 50,
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
  },
  card: {
    backgroundColor: colors["grey-200"],
    width: "90%",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 20,
    gap: 40,
  },
  button: {
    alignSelf: "center",
    borderWidth: 1,
    borderColor: colors.secondary,
    padding: 10,
    borderRadius: 10,
    width: "100%",
  },
  buttonText: {
    color: colors.secondary,
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Inter-600",
  },
});

export default Notifications;
