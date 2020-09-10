import * as React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

export function Decimal(props: any) {
  return (
    <TouchableOpacity onPress={() => handleDecimal(props)}>
      <View style={styles.bg}>
        <Text style={styles.text}>.</Text>
      </View>
    </TouchableOpacity>
  );
}

function handleDecimal(props: any) {
  if (props.total.includes(".")) {
    return;
  }

  props.setTotal(props.total + ".");
}
