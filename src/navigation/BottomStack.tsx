/*
  File: BottomStack.tsx
  Author: Udaya Prakash Jayaraman
  Created: January 30, 2024
  Description: This file contains the implementation of Bottom Navigator Container.
*/

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View, Text } from "react-native";

const Tab = createBottomTabNavigator();

function Home() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Open up Home.tsx to start working on your app!</Text>
    </View>
  );
}

function Account() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Open up Account.tsx to start working on your app!</Text>
    </View>
  );
}

export const BottomStack = (): JSX.Element => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default BottomStack;
