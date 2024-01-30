/*
  File: global.style.ts
  Author: Udaya Prakash Jayaraman
  Created: January 30, 2024
  Description: This file contains the implementation global css styles which are similar in multiple place.
*/

import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  primaryButton: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginBottom: 16,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  linkButtonText: {
    color: "#3498db",
    textDecorationLine: "underline",
  },
});
