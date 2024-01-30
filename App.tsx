import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, StyleSheet, Button } from "react-native";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function Profile() {
  return (
    <View style={styles.container}>
      <Text>Open up Profile.tsx to start working on your app!</Text>
    </View>
  );
}

function Settings() {
  return (
    <View style={styles.container}>
      <Text>Open up Settings.tsx to start working on your app!</Text>
    </View>
  );
}

const SignOut = ({ navigation }) => navigation.navigate("Login");

function Home() {
  return (
    <View style={styles.container}>
      <Text>Open up Home.tsx to start working on your app!</Text>
    </View>
  );
}

function Account() {
  return (
    <View style={styles.container}>
      <Text>Open up Account.tsx to start working on your app!</Text>
    </View>
  );
}

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>This is the home screen</Text>
      <Button
        title="Go to Home Screen"
        onPress={() => navigation.navigate("HomeTabs")} // We added an onPress event which would navigate to the About screen
      />
    </View>
  );
};

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }}/>
      <Tab.Screen name="Account" component={Account} options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeTabs"
          component={HomeTabsStack}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeTabsStack() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeTabs} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Sign Out" component={SignOut} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
