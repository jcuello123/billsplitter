import { View, Text, Button, StyleSheet } from "react-native";
import * as React from "react";

export function Number(props: any) {
  return (
    <View style={styles.bg}>
      <Text
        style={styles.text}
        onPress={() => {
          if (props.total === 0) {
            props.setTotal(props.number);
          } else {
            props.setTotal(props.total + props.number);
          }
        }}
      >
        {props.number}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: "lightblue",
    padding: 32,
    borderRadius: 8,
  },
  text: {
    color: "white",
    fontSize: 40,
  },
});
