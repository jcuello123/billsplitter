import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Numberpad } from "./numperpad/numberpad";
import { useState } from "react";

// @ts-ignore
export function Home({ navigation }) {
  const [total, setTotal] = useState("0");

  return (
    <View style={styles.bg}>
      <Text style={styles.text}>How much is the</Text>
      <Text style={styles.text}>total bill?</Text>
      <Text style={styles.text}>{`$${total}`}</Text>
      <Numberpad total={total} setTotal={setTotal} />
    </View>
  );
}

// @ts-ignore
export function Details({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.text}>How many people</Text>
      <Text style={styles.text}>are paying?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    width: "100%",
    height: "100%",
    backgroundColor: "lightblue",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 50,
    color: "white",
    margin: 5,
  },
});
