import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {useEffect, useState} from "react";
import colors from "../assets/colors.json";

const NotificationItem = ({type, value, id, deleteNotification, dateTime, valveID}) => {
    const [timeDifference, setTimeDifference] = useState({});
    const formattedDateTime = new Date(dateTime); // Format the date as needed

    useEffect(() => {
        function calculateTimeDifference(postedDate) {
            // Convert the posted date string to a Date object
            const postedTime = new Date(postedDate);

            // Get the current date and time
            const currentTime = new Date();

            // Calculate the time difference in milliseconds
            const timeDifference = currentTime - postedTime;

            // Calculate the time difference in seconds, minutes, hours, and days
            const seconds = Math.floor(timeDifference / 1000);
            const minutes = Math.floor(seconds / 60);
            const hours = Math.floor(minutes / 60);
            const days = Math.floor(hours / 24);

            return {
                seconds: seconds,
                minutes: minutes,
                hours: hours,
                days: days
            };
        }

        setTimeDifference(calculateTimeDifference(formattedDateTime));
    }, []);



    return (
        <TouchableOpacity style={styles.container} onPress={()=>deleteNotification(id)}>
            <View style={styles.left}>
                <Ionicons name="alert-circle" size={24} color={colors[type.toLowerCase()]}/>
                <Text style={[styles.value, {color: colors[type.toLowerCase()]}]}>{value}</Text>
            </View>
            <View style={styles.right}>
                <Text style={[styles.id, {color: colors[type.toLowerCase()]}]}>{valveID}</Text>
                <Text
                    style={[styles.time, {color: colors[type.toLowerCase()]}]}>{timeDifference.days ? timeDifference.days + " Days" : timeDifference.hours ? timeDifference.hours + " Hours" : timeDifference.minutes ? timeDifference.minutes + " Min" : timeDifference.seconds + " Sec"}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        backgroundColor: colors["grey-100"],
        marginBottom: 10,
    },
    left: {
        flexDirection: "row",
        alignItems: "flex-start",
        gap: 5,
    },
    right: {
        flexDirection: "column",
        alignItems: "center",
    },
    id: {
        fontSize: 14,
        fontFamily: "Inter-600",
        color: colors["grey-500"],
    },
    value: {
        fontSize: 14,
        fontFamily: "Inter-600",
        color: colors["grey-500"],
    },
});

export default NotificationItem;