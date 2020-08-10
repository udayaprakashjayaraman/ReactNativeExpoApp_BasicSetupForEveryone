import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { constants } from '../screens/Helper/Constants';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import LandlordLoginScreen from '../screens/Landlord/LoginScreen';
import TenentLoginScreen from '../screens/Tenent/LoginScreen';
import SwiperComponent from '../screens/SwiperComponent';
import LdashboardScreen from '../screens/Landlord/Dashboard';
import LManageTenentScreen from '../screens/Landlord/ManageTenent';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen=({navigation})=>(
    <HomeStack.Navigator>
      <HomeStack.Screen name="SwiperComponent" component={SwiperComponent}/>
      <HomeStack.Screen name="LandlordLoginScreen" component={LandlordLoginScreen} />
      <HomeStack.Screen name="TenentLoginScreen" component={TenentLoginScreen} />
      <HomeStack.Screen name="LdashboardScreen" component={LdashboardScreen} />
      <HomeStack.Screen name="LManageTenentScreen" component={LManageTenentScreen} />
    </HomeStack.Navigator>
);

const DetailStackScreen=({navigation})=>(
  <DetailsStack.Navigator screenOptions={{headerStyle:{backgroundColor: constants.APP_COLOR},headerTintColor:"#ffff",headerTitleStyle:{fontWeight:'bold'}}}>
    <DetailsStack.Screen name="Dashboard" component={Dashboard} 
    options={{title:'Overview', 
    headerLeft:()=>(
      <Icon.Button name='ios-menu' size={25} backgroundColor= {constants.APP_COLOR} onPress={()=>navigation.openDrawer()}/>
    )}}/>
    <DetailsStack.Screen name="Notifications" component={NotificationsScreen} />
  </DetailsStack.Navigator>
);

const Dashboard=({ navigation })=>{
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}



function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Notifications"
        onPress={() => navigation.navigate('Notifications')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}


function MyStack() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Dashboard" component={HomeStackScreen} />
      <Drawer.Screen name="NotificationsScreen" component={DetailStackScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
