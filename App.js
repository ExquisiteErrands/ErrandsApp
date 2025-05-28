import * as React from "react";
import { View, Text } from "react-native";
import {
  createStaticNavigation,
  useNavigation,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./Screens/Home";

import Login from "./Screens/Login";

const RootStack = createNativeStackNavigator({
  initialRouteName: "Home",
  screens: {
    Home: Home,
    Login: Login,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
