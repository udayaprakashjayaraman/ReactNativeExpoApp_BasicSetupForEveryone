/*
  File: StackNavigation.tsx
  Author: Udaya Prakash Jayaraman
  Created: January 30, 2024
  Description: This file contains the implementation of Stack Implementations to be handled.
*/


import React from "react";
import { View, Text, StyleSheet, Button, ToastAndroid } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DrawerStack } from "./DrawerStack";

const Stack = createNativeStackNavigator();

const Login = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Text>This is the home screen</Text>
        <Button
          title="Go to Home Screen"
          onPress={() => navigation.navigate("DrawerStack")} // We added an onPress event which would navigate to the About screen
        />
      </View>
    );
  };

export const StackNavigation = (): JSX.Element => {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="DrawerStack" component={DrawerStack} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  
  
export default StackNavigation;
