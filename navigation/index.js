import  React from 'react';
import {Text, View, SafeAreaView, ScrollView,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator,DrawerItems } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';


import { constants } from '../screens/Helper/Constants';
import {DrawerContent} from '../screens/DrawerContent';
import MainTabScreen from '../screens/MainTabScreen';
import SwiperComponent from '../screens/SwiperComponent';
import LandlordLoginScreen from '../screens/Landlord/LoginScreen';
import LandlordRegisterScreen from '../screens/Landlord/RegisterScreen';
import DashboardScreen from '../screens/Landlord/Dashboard';
import ManageTenentScreen from '../screens/Landlord/ManageTenent';
import ManagePropertiesScreen from '../screens/Landlord/ManageProperties';
import Aboutus from '../screens/Common/AboutUs';
import PrivacyPolicy from '../screens/Common/PrivacyPolicy';
import Support from '../screens/Common/Support';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();



function LandlordHome() {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent  {...props}/>} >
          <Drawer.Screen name={constants.LANDLORD_LOGIN_DRAWER} component={MainTabScreen} />
  </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={constants.SWIPER_COMPONENT} component={SwiperComponent} options={{headerShown:false}} />
        <Stack.Screen name={constants.LANDLORD_LOGIN_SCREEN} component={LandlordLoginScreen} options={{headerShown:false}} />
        <Stack.Screen name={constants.LANDLORD_REGISTER_SCREEN} component={LandlordRegisterScreen} options={{headerShown:false}} />
        <Stack.Screen name={constants.LANDLORD_DASHBOARD_DRAWER} component={LandlordHome} options={{headerShown:false}} />
        <Stack.Screen name={constants.MANAGE_TENENT_SCREEN} component={ManageTenentScreen}  />
        <Stack.Screen name={constants.MANAGE_PROPERTIES_SCREEN} component={ManagePropertiesScreen} />
        <Stack.Screen name={constants.ABOUT_US_SCREEN} component={Aboutus}  />
        <Stack.Screen name={constants.PRIVACY_POLICY} component={PrivacyPolicy}  />
        <Stack.Screen name={constants.SUPPORT} component={Support}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

