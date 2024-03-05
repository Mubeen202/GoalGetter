import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Colors from './src/App/Utils/Colors';
import TopNavigationScreen from './src/App/Screens/BottomNavigation/TopNavigationScreen';
import { BottomNavigationScreen } from './src/App/Screens/BottomNavigation/BottomNavigationScreen';
import TopAndBottomNavigations from './src/App/Screens/BottomNavigation/TopAndBottomNavigations';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
       <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={TopAndBottomNavigations} />
      </Stack.Navigator>
      {/* <TopAndBottomNavigations/> */}
    </NavigationContainer>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DARK_GREY,
    padding: 4,
  },
  navigatorContainer: {
    flex: 1,
    flexDirection: 'column',
  },
});
