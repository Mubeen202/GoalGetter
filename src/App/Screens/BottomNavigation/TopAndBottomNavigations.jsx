import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { BottomNavigationScreen, TabNavigator } from "./BottomNavigationScreen";
import TopNavigationScreen from "./TopNavigationScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


export default function TopAndBottomNavigations() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TopNavigationScreens" component={TopNavigationScreen} />
      {/* <Stack.Screen name="BottomNavigationScreens" component={BottomNavigationScreen} /> */}
    </Stack.Navigator>
  );
}
