import * as React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

export function EraseButton(props: any) {
  const symbol = "<";
  return (
    <TouchableOpacity
      onPress={() => {
        erase(props);
      }}
    >
      <View style={[styles.bg, { backgroundColor: "#ef9228" }]}>
        <Text style={styles.text}>{symbol}</Text>
      </View>
    </TouchableOpacity>
  );
}

function erase(props: any) {
  const total = props.total;
  const len = total.length;
  if (len <= 1) {
    props.setTotal("0");
    return;
  }

  props.setTotal(total.substring(0, len - 1));
}
