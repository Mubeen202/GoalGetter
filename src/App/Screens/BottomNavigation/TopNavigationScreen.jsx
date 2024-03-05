import React from "react";
import { useIsFocused } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Colors from "../../Utils/Colors";
import PremierMainScreen from "../Leagues/Premier/PremierMainScreen/PremierMainScreen";
import LaligaMainScreen from "../Leagues/Laliga/LaligaMainScreen/LaligaMainScreen";
import BundesligaMainScreen from "../Leagues/Bundesliga/BundesligaMainScreen/BundesligaMainScreen";
import SerieMainScreen from "../Leagues/Serie/SerieMainScreen/SerieMainScreen";
import LigueMainScreen from "../Leagues/Ligue/LigueMainScreen/LigueMainScreen";

const Tab = createMaterialTopTabNavigator();

export default function TopNavigationScreen() {
  // Inside your component or screen where you define the tab screen
  const focused = useIsFocused();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.WHITE,
        tabBarInactiveTintColor: Colors.WHITE,

        tabBarLabelStyle: {
          fontSize: 14,
          textTransform: "none",
        },
        tabBarStyle: {
          backgroundColor: Colors.DARK_GREY,
          marginTop: 30,
        },
      }}
    >
      <Tab.Screen
        name="premier"
        options={{ tabBarLabel: "Premier" }}
        component={PremierMainScreen}
      />
      <Tab.Screen
        name="laliga"
        options={{ tabBarLabel: "Laliga" }}
        component={LaligaMainScreen}
      />
      <Tab.Screen
        name="bundesliga"
        options={{ tabBarLabel: "Bundesliga" }}
        component={BundesligaMainScreen}
      />
      <Tab.Screen
        name="serie"
        options={{ tabBarLabel: "Serie" }}
        component={SerieMainScreen}
      />
      <Tab.Screen
        name="ligue"
        options={{ tabBarLabel: "Ligue" }}
        component={LigueMainScreen}
      />
    </Tab.Navigator>
  );
}

