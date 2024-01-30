/*
  File: StackNavigation.tsx
  Author: Udaya Prakash Jayaraman
  Created: January 30, 2024
  Description: This file contains the implementation of Stack Implementations to be handled.
*/

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "@src/screens/auth/Login";
import Register from "@src/screens/auth/Register";
import SplashScreen from "@src/screens/auth/SplashScreen";
import React from "react";

import { DrawerStack } from "./DrawerStack";

const Stack = createNativeStackNavigator();

export const StackNavigation = (): JSX.Element => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="DrawerStack" component={DrawerStack} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
