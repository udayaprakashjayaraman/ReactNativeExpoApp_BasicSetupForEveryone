import * as React from 'react';
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
import LManagePropertiesScreen from '../screens/Landlord/ManageProperties';
import TdashboardScreen from '../screens/Tenent/Dashboard';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const MerchantSpace=({navigation})=>(
  <Drawer.Navigator initialRouteName="LdashboardScreen" >
      <Drawer.Screen name="LdashboardScreen" component={LdashboardScreen} options={{ drawerLabel: 'LDashboard' }} options={{title:'Home', 
    headerLeft:()=>(
      <Icon.Button name='ios-menu' size={25} backgroundColor= {constants.APP_COLOR} onPress={()=>navigation.openDrawer()}/>
    )}} />
      <Drawer.Screen name="LManageTenentScreen" component={LManageTenentScreen} options={{ drawerLabel: 'LTenents' }}/>
      <Drawer.Screen name="LManagePropertiesScreen" component={LManagePropertiesScreen} options={{ drawerLabel: 'LProperties' }}/>
      <Drawer.Screen name="Sign Out" component={SwiperComponent}/>
    </Drawer.Navigator>
);
const TenentSpace=({navigation})=>(
  <Drawer.Navigator initialRouteName="TdashboardScreen">
      <Drawer.Screen name="TdashboardScreen" component={TdashboardScreen} options={{ drawerLabel: 'TDashboard' }} />
      {/* <Drawer.Screen name="LManageTenentScreen" component={LManageTenentScreen} options={{ drawerLabel: 'TTenents' }}/> */}
      <Drawer.Screen name="Sign Out" component={SwiperComponent}/>
    </Drawer.Navigator>
);




function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="SwiperComponent" component={SwiperComponent}/>
      <Stack.Screen name="LandlordLoginScreen" component={LandlordLoginScreen} />
      <Stack.Screen name="TenentLoginScreen" component={TenentLoginScreen} />
      <Stack.Screen name="MerchantSpace" component={MerchantSpace} />
      <Stack.Screen name="TenentSpace" component={TenentSpace} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
