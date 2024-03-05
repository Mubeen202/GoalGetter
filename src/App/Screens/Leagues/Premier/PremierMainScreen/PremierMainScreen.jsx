import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Colors from "../../../../Utils/Colors";
import { BottomNavigationScreen } from "../../../BottomNavigation/BottomNavigationScreen";

export default function PremierMainScreen() {
  return (
    <View style={styles.container}>
      <BottomNavigationScreen route={{
    params: {
      name: 'premier',
    },
  }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.LIGHT_GREY,
  },
});


// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       width: windowWidth,
//       backgroundColor: Colors.LIGHT_GREY,
//       paddingRight: 20,
//       marginTop:0,
    
//     },
//     text:{
//       color: Colors.WHITE
//     }
//   });