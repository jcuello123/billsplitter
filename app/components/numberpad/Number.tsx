import { View, Text, TouchableOpacity } from "react-native";
import * as React from "react";
import { styles } from "./styles";

export function Number(props: any) {
  return (
    <TouchableOpacity
      onPress={() => {
        appendNumber(props);
      }}
    >
      <View style={styles.bg}>
        <Text style={styles.text}>{props.number}</Text>
      </View>
    </TouchableOpacity>
  );
}

function appendNumber(props: any) {
  const total: string = props.total;

  if (total === "0") {
    props.setTotal(props.number);
    return;
  }
  if (total.includes(".")) {
    const afterDecimal: string = total.split(".")[1];
    if (afterDecimal.length >= 2) {
      return;
    }
  } else if (total.length === 5) {
    return;
  }

  props.setTotal(total + props.number);
}
