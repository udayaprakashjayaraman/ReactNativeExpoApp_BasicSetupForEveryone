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

const Register = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // Implement your registration logic here
    // For simplicity, just navigate to the Login screen after registration
    navigation.navigate("Login" as never);
  };

  return (
    <View style={globalStyles.container}>
      <Image
        source={require("@src/assets/appIcon.png")}
        style={globalStyles.logo}
      />
      <Text style={globalStyles.title}>Register</Text>

      <TextInput
        style={globalStyles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />

      <TextInput
        style={globalStyles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
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
        onPress={handleRegister}
      >
        <Text style={globalStyles.buttonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login" as never)}>
        <Text style={globalStyles.linkButtonText}>
          Already have an account? Login Here
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;
