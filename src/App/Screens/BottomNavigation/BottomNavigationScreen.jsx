import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Entypo,
  Foundation,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";
import UpNextPremierScreen, { UpNextLaligaScreen } from "../BottomNavigationScreen/UpNext/UpNextScreen";
import Colors from "../../Utils/Colors";
import ResultScreen from "../BottomNavigationScreen/Results/ResultScreen";
import LeaderBoardScreen from "../BottomNavigationScreen/LeaderBoard/LeaderBoardScreen";
import ProfileScreen from "../BottomNavigationScreen/Profile/ProfileScreen";
import TableScreen from "../BottomNavigationScreen/Table/TableScreen";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


export const BottomNavigationScreen = (props) => {
    const UpNextWrapper = ( ) => {
        const screen = props.params; // Extracting the screen parameter from props.params
        console.log('this is route', screen);
        // Now you can use the `screen` prop to conditionally render the appropriate content
        // For example:
        // switch (screen) {
        //   case "premier":
        //     return <UpNextPremierScreen />;
        //   case "laliga":
        //     return <UpNextLaligaScreen />;
        //   // Add cases for other screens if needed
        //   default:
        //     return null; // Render nothing if no valid screen is provided
        // }
      };
return( 
<Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen
      name="up_next"
    //   component={({ screen }) => {
    //     console.log('screen', screen)
    //      screen = props.item || {};
    //     // Conditionally render the component based on the screen parameter
    //     switch (screen) {
    //       case "premier":
    //         return <UpNextPremierScreen />;
    //       case "laliga":
    //         return <UpNextLaligaScreen />;
    //     //   case "bundesliga":
    //     //     return <UpNextBundesligaScreen />;
    //     //   case "serie":
    //     //     return <UpNextSerieScreen />;
    //     //   case "ligue":
    //     //     return <UpNextLigueScreen />;
    //       default:
    //         return "premier"; // Render nothing if no valid screen is provided
    //     }
    //   }}
    component={UpNextWrapper}
      tabBarOptions={{
        activeTintColor: Colors.WHITE,
        inactiveTintColor: Colors.WHITE,
        style: {
          backgroundColor: Colors.DARK_GREY,
        },
      }}
      options={{
        tabBarLabel: ({ color }) => (
          <Text style={{ color: Colors.WHITE, fontSize: 12 }}>Up Next</Text>
        ),

        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="navigate-next" size={24} color={Colors.WHITE} />
        ),

        tabBarStyle: {
          backgroundColor: Colors.DARK_GREY, // Set background color here
        },
      }}
    />

    <Tab.Screen
      name="result"
      component={ResultScreen}
      tabBarOptions={{
        activeTintColor: Colors.WHITE,
        inactiveTintColor: Colors.WHITE,
        style: {
          backgroundColor: Colors.DARK_GREY,
        },
      }}
      options={{
        tabBarLabel: ({ color }) => (
          <Text style={{ color: Colors.WHITE, fontSize: 12 }}>Results</Text>
        ),

        tabBarIcon: ({ color, size }) => (
          <Foundation name="results" size={24} color={Colors.WHITE} />
        ),

        tabBarStyle: {
          backgroundColor: Colors.DARK_GREY, // Set background color here
        },
      }}
    />


<Tab.Screen
      name="table"
      component={TableScreen}
      tabBarOptions={{
        activeTintColor: Colors.WHITE,
        inactiveTintColor: Colors.WHITE,
        style: {
          backgroundColor: Colors.DARK_GREY,
        },
      }}
      options={{
        tabBarLabel: ({ color }) => (
          <Text style={{ color: Colors.WHITE, fontSize: 12 }}>Table</Text>
        ),

        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="leaderboard" size={24} color={Colors.WHITE} />
        ),

        tabBarStyle: {
          backgroundColor: Colors.DARK_GREY, // Set background color here
        },
      }}
    />
    <Tab.Screen
      name="leaderboard"
      component={LeaderBoardScreen}
      tabBarOptions={{
        activeTintColor: Colors.WHITE,
        inactiveTintColor: Colors.WHITE,
        style: {
          backgroundColor: Colors.DARK_GREY,
        },
      }}
      options={{
        tabBarLabel: ({ color }) => (
          <Text style={{ color: Colors.WHITE, fontSize: 12 }}>Leaderboard</Text>
        ),

        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="leaderboard" size={24} color={Colors.WHITE} />
        ),

        tabBarStyle: {
          backgroundColor: Colors.DARK_GREY, // Set background color here
        },
      }}
    />
    <Tab.Screen
      name="profile"
      component={ProfileScreen}
      tabBarOptions={{
        activeTintColor: Colors.WHITE,
        inactiveTintColor: Colors.WHITE,
        style: {
          backgroundColor: Colors.DARK_GREY,
        },
      }}
      options={{
        tabBarLabel: ({ color }) => (
          <Text style={{ color: Colors.WHITE, fontSize: 12 }}>Profile</Text>
        ),

        tabBarIcon: ({ color, size }) => (
          <AntDesign name="user" size={24} color={Colors.WHITE} />
        ),

        tabBarStyle: {
          backgroundColor: Colors.DARK_GREY, // Set background color here
        },
      }}
    />

 
  </Tab.Navigator>)
}
 


