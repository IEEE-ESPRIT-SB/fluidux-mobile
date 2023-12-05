import React from "react";
import { View, StyleSheet } from "react-native";
import { LineChart, Grid, XAxis, YAxis } from "react-native-svg-charts";
import { Defs, LinearGradient, Stop } from "react-native-svg";
import colors from "../assets/colors.json"; // assuming you have a colors file

const Chart = () => {
  const data = [20, 10, 2, 30, -4, -24];
  const contentInset = { top: 20, bottom: 20 };

  // X-axis data representing days of the week
  const xAxisData = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const Gradient = () => (
    <Defs key={"gradient"}>
      <LinearGradient id={"gradient"} x1={"0%"} y1={"0%"} x2={"0%"} y2={"100%"}>
        <Stop offset={"0%"} stopColor={colors.secondary} stopOpacity={0.8} />
        <Stop offset={"100%"} stopColor={colors.secondary} stopOpacity={0} />
      </LinearGradient>
    </Defs>
  );

  return (
    <View style={styles.container}>
      <YAxis
        data={data}
        contentInset={contentInset}
        svg={{
          fill: "grey",
          fontSize: 10,
        }}
        numberOfTicks={10}
        formatLabel={(value) => `${value}m³`}
      />
      <View style={{ flex: 1, marginLeft: 10 }}>
        <LineChart
          style={{ flex: 1 }}
          data={data}
          svg={{
            stroke: colors.secondary,
          }}
          contentInset={contentInset}
          extras={[Gradient]}
        >
          <Grid />
        </LineChart>
        <XAxis
          style={{ marginHorizontal: -10 }}
          data={data}
          formatLabel={(value, index) => xAxisData[index]}
          contentInset={{ left: 10, right: 10 }}
          svg={{ fontSize: 10, fill: "grey" }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 200,
  },
});

export default Chart;
