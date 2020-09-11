import * as React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

// @ts-ignore
export function TipsScreen({ route }) {
  const { total } = route.params;
  return (
    <View style={styles.bg}>
      <Text style={styles.text}>Total: ${total}</Text>
    </View>
  );
}
