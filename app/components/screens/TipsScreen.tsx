import React, { useState } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import Slider from "@react-native-community/slider";

// @ts-ignore
export function TipsScreen({ route }) {
  const total: number = parseFloat(route.params.total);
  const [totalPlusTip, setTotalPlusTip] = useState<number>(total);
  const [tip, setTip] = useState<number>(0);
  const step = 5;

  return (
    <View style={styles.bg}>
      <Text style={styles.text}>Total: ${totalPlusTip}</Text>
      <Slider
        style={{ width: 200, height: 40 }}
        value={tip}
        minimumTrackTintColor="orange"
        minimumValue={0}
        maximumValue={100}
        step={step}
        onValueChange={(percentage) => {
          if (percentage < tip) {
            setTotalPlusTip(
              parseFloat((totalPlusTip - total * (step / 100)).toFixed(2))
            );
          } else {(total * (percentage / 100) + total).toFixed(2)
            setTotalPlusTip(
              parseFloat((total * (percentage / 100) + total).toFixed(2))
            );
          }
          setTip(percentage);
        }}
      />
      <Text style={styles.text}>Tip: {tip}%</Text>
    </View>
  );
}
