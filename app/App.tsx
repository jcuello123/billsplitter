// In App.js in a new project
import * as React from "react";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./components/screens/HomeScreen";
import { TipsScreen } from "./components/screens/TipsScreen";

const Stack = createStackNavigator();

function App() {
  const [loaded] = Font.useFonts({
    Raleway: require("./assets/fonts/Raleway-Italic.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerTransparent: true,
          title: "",
        }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="TipsScreen" component={TipsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
