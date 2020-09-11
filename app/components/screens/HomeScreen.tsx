import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Numberpad } from "../numberpad/Numberpad";
import { useState } from "react";
import { styles } from "./styles";

// @ts-ignore
export function HomeScreen({ navigation }) {
  const gray = "#323232";
  const orange = "#ef9228";
  const [total, setTotal] = useState("0");

  return (
    <View style={styles.bg}>
      <Text style={styles.text}>How much is the</Text>
      <Text style={styles.text}>total bill?</Text>
      <Text style={styles.text}>{`$${total}`}</Text>
      <Numberpad total={total} setTotal={setTotal} />
      <TouchableOpacity
        onPress={() => {
          if (total !== "0") {
            navigation.navigate("TipsScreen", { total: total });
          }
        }}
      >
        <View
          style={{
            //@ts-ignore
            backgroundColor: total > 0 ? orange : gray,
            padding: 16,
            marginTop: 10,
            borderWidth: 1,
            borderRadius: 50,
          }}
        >
          <Text style={styles.text}>Next</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}


