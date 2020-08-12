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
import AboutUs from '../screens/Common/AboutUs';
import PrivacyPolicy from '../screens/Common/PrivacyPolicy';
import Support from '../screens/Common/Support';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const MerchantSpace=({navigation})=>(
  <Drawer.Navigator initialRouteName="LdashboardScreen" >
      <Drawer.Screen name="LdashboardScreen" component={LdashboardScreen} options={{ drawerLabel: 'Dashboard',title:'Home'}} />
      <Drawer.Screen name="LManageTenentScreen" component={LManageTenentScreen} options={{ drawerLabel: 'Tenents' }}/>
      <Drawer.Screen name="LManagePropertiesScreen" component={LManagePropertiesScreen} options={{ drawerLabel: 'Properties' }}/>
      <Drawer.Screen name="Rate Us" component={PrivacyPolicy}/>
      <Drawer.Screen name="Privacy Policy" component={PrivacyPolicy}/>
      <Drawer.Screen name="About us" component={AboutUs}/>
      <Drawer.Screen name="Support" component={Support}/>
      <Drawer.Screen name="Sign Out" component={SwiperComponent}/>
  </Drawer.Navigator>
);
const TenentSpace=({navigation})=>(
  <Drawer.Navigator initialRouteName="TdashboardScreen">
      <Drawer.Screen name="TdashboardScreen" component={TdashboardScreen} options={{ drawerLabel: 'Dashboard' }} />
      <Drawer.Screen name="Rate Us" component={PrivacyPolicy}/>
      <Drawer.Screen name="Privacy Policy" component={PrivacyPolicy}/>
      <Drawer.Screen name="About us" component={AboutUs}/>
      <Drawer.Screen name="Support" component={Support}/>
      <Drawer.Screen name="Sign Out" component={SwiperComponent}/>
    </Drawer.Navigator>
);

function MyStack(navigation) {
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
