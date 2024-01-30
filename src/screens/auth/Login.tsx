/*
  File: Login.tsx
  Author: Udaya Prakash Jayaraman
  Created: January 30, 2024
  Description: This file contains the implementation of Login Screen.
*/

import { useNavigation } from "@react-navigation/native";
import globalStyles from "@src/utils/global.style";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    navigation.navigate("DrawerStack" as never);
  };

  const navigateToRegister = () => {
    navigation.navigate("Register" as never);
  };

  return (
    <View style={globalStyles.container}>
      <Image
        source={require("@src/assets/appIcon.png")}
        style={globalStyles.logo}
      />
      <Text style={globalStyles.title}>Login</Text>

      <TextInput
        style={globalStyles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />

      <TextInput
        style={globalStyles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />

      <TouchableOpacity
        style={globalStyles.primaryButton}
        onPress={handleLogin}
      >
        <Text style={globalStyles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={navigateToRegister}>
        <Text style={globalStyles.linkButtonText}>New User? Register Here</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
