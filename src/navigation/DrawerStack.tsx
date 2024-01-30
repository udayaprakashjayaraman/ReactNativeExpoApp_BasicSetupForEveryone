/*
  File: DrawerStack.tsx
  Author: Udaya Prakash Jayaraman
  Created: January 30, 2024
  Description: This file contains the implementation of Drawer Stack Navigation.
*/

import { createDrawerNavigator } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text } from "react-native";

import BottomStack from "./BottomStack";

const Drawer = createDrawerNavigator();

function Profile() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {" "}
      <Text>Open up Profile.tsx to start working on your app!</Text>
    </View>
  );
}

function Settings() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {" "}
      <Text>Open up Settings.tsx to start working on your app!</Text>
    </View>
  );
}

const SignOut = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.navigate("Login" as never);
  }, [navigation]);

  return <></>;
};

export const DrawerStack = (): JSX.Element => {
  return (
    <Drawer.Navigator initialRouteName="BottomStack">
      <Drawer.Screen name="BottomStack" component={BottomStack} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Sign Out" component={SignOut} />
    </Drawer.Navigator>
  );
};

export default DrawerStack;
