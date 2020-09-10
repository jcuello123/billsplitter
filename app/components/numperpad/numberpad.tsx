import * as React from "react";
import { Number } from "./number";
import { View, StyleSheet } from "react-native";

export function Numberpad(props: any) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Number total={props.total} setTotal={props.setTotal} number="1" />
        <Number total={props.total} setTotal={props.setTotal} number="2" />
        <Number total={props.total} setTotal={props.setTotal} number="3" />
      </View>
      <View style={styles.row}>
        <Number total={props.total} setTotal={props.setTotal} number="4" />
        <Number total={props.total} setTotal={props.setTotal} number="5" />
        <Number total={props.total} setTotal={props.setTotal} number="6" />
      </View>
      <View style={styles.row}>
        <Number total={props.total} setTotal={props.setTotal} number="7" />
        <Number total={props.total} setTotal={props.setTotal} number="8" />
        <Number total={props.total} setTotal={props.setTotal} number="9" />
      </View>
      <View style={styles.row}>
        <Number total={props.total} setTotal={props.setTotal} number="0" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "lightblue",
    borderRadius: 20,
    width: "100%",
  },
  row: {
    flexDirection: "row",
    alignSelf: "center",
  },
});
