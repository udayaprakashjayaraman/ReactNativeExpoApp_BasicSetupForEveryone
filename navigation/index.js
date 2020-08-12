import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { constants } from '../screens/Helper/Constants';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import LandlordLoginScreen from '../screens/Landlord/LoginScreen';
import LandlordRegisterScreen from '../screens/Landlord/RegisterScreen';
import SwiperComponent from '../screens/SwiperComponent';
import DashboardScreen from '../screens/Landlord/Dashboard';
import ManageTenentScreen from '../screens/Landlord/ManageTenent';
import ManagePropertiesScreen from '../screens/Landlord/ManageProperties';
import TdashboardScreen from '../screens/Tenent/Dashboard';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const LoginDrawer=({navigation})=>(
  <Stack.Navigator screenOptions={{headerShown:false}} >
      <Stack.Screen name={constants.SWIPER_COMPONENT} component={SwiperComponent} />
      <Stack.Screen name={constants.LANDLORD_LOGIN_SCREEN} component={LandlordLoginScreen} />
      <Stack.Screen name={constants.LANDLORD_REGISTER_SCREEN} component={LandlordRegisterScreen} />
    </Stack.Navigator>
);


const LandlordDrawer=({navigation})=>(
  <Stack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor:constants.APP_COLOR,
    }, headerTintColor:"#ffff",
    headerTitleStyle:{
      fontWeight:'bold'
    }
  }}>
      <Stack.Screen name={constants.LANDLORD_DASHBOARD_SCREEN} component={DashboardScreen} options={{
        title:'Overview',
        headerLeft:()=>(
          <Icon.Button name='ios-menu' size={35} backgroundColor={constants.APP_COLOR} onPress={()=>navigation.openDrawer()}/>
        )
      }}/>
      <Stack.Screen name={constants.MANAGE_TENENT_SCREEN} component={ManageTenentScreen}  />
      <Stack.Screen name={constants.MANAGE_PROPERTIES_SCREEN} component={ManagePropertiesScreen} />
    </Stack.Navigator>
);

function MyStack() {
  return (
    // <Stack.Navigator screenOptions={{headerShown:false}}>
    //   <Stack.Screen name="SwiperComponent" component={SwiperComponent}/>
    //   <Stack.Screen name="LandlordLoginScreen" component={LandlordLoginScreen} />
    //   <Stack.Screen name="TenentLoginScreen" component={TenentLoginScreen} />
    //   <Stack.Screen name="MerchantSpace" component={MerchantSpace} />
    //   <Stack.Screen name="TenentSpace" component={TenentSpace} />
    // </Stack.Navigator>
    <Drawer.Navigator initialRouteName={constants.SWIPER_COMPONENT}>
          <Drawer.Screen name={constants.LANDLORD_LOGIN_DRAWER} component={LoginDrawer} />
          <Drawer.Screen name={constants.LANDLORD_DRAWER} component={LandlordDrawer} />
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
