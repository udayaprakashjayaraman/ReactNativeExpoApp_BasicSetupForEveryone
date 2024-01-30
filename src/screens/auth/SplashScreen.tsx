/*
  File: SplashScreen.tsx
  Author: Udaya Prakash Jayaraman
  Created: January 30, 2024
  Description: This file contains the implementation of Splash Screen.
*/

import { useNavigation } from "@react-navigation/native";
import globalStyles from "@src/utils/global.style";
import React, { useEffect } from "react";
import { View, Image, ActivityIndicator } from "react-native";

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login" as never);
    }, 2000);
  }, [navigation]);

  return (
    <View style={globalStyles.container}>
      <Image
        source={require("@src/assets/appIcon.png")}
        style={globalStyles.logo}
      />
      <ActivityIndicator size="large" color="#3498db" />
    </View>
  );
};

export default SplashScreen;
