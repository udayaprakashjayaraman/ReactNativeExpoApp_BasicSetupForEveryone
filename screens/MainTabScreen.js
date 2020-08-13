import  React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


import { constants } from '../screens/Helper/Constants';
import LandlordLoginScreen from '../screens/Landlord/LoginScreen';
import LandlordRegisterScreen from '../screens/Landlord/RegisterScreen';
import SwiperComponent from '../screens/SwiperComponent';
import DashboardScreen from '../screens/Landlord/Dashboard';
import ManageTenentScreen from '../screens/Landlord/ManageTenent';
import ManagePropertiesScreen from '../screens/Landlord/ManageProperties';
import Aboutus from '../screens/Common/AboutUs';
import PrivacyPolicy from '../screens/Common/PrivacyPolicy';
import Support from '../screens/Common/Support';


const LoginStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();



const MainTabScreen=()=>(
<Tab.Navigator
      initialRouteName={constants.LANDLORD_DASHBOARD_SCREEN}
      activeColor="#fff"
      >
      <Tab.Screen
        name={constants.LANDLORD_DASHBOARD_SCREEN}
        component={LandlordDrawer}
        options={{
          tabBarLabel: 'Properties',
          tabBarColor: constants.APP_COLOR,
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name= {constants.MANAGE_TENENT_SCREEN}
        component={ManageTenentScreen}
        options={{
          tabBarLabel: 'Tenent manage',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-notifications" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name={constants.MANAGE_PROPERTIES_SCREEN}
        component={ManagePropertiesScreen}
        options={{
          tabBarLabel: 'Properties',
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

const LoginDrawer=({navigation})=>(
    <LoginStack.Navigator screenOptions={{headerShown:false}} >
        <LoginStack.Screen name={constants.SWIPER_COMPONENT} component={SwiperComponent} />
        <LoginStack.Screen name={constants.LANDLORD_LOGIN_SCREEN} component={LandlordLoginScreen} />
        <LoginStack.Screen name={constants.LANDLORD_REGISTER_SCREEN} component={LandlordRegisterScreen} />
      </LoginStack.Navigator>
  );
  
  
  const LandlordDrawer=({navigation})=>(
    <DetailsStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:constants.APP_COLOR,
      }, headerTintColor:"#ffff",
      headerTitleStyle:{
        fontWeight:'bold'
      }
    }}  options={{
      headerLeft:()=>(
        <Icon.Button name='ios-menu' size={35} backgroundColor={constants.APP_COLOR} onPress={()=>navigation.openDrawer()}/>
      )
    }}>
        <DetailsStack.Screen name={constants.LANDLORD_DASHBOARD_SCREEN} component={DashboardScreen} options={{
          headerLeft:()=>(
            <Icon.Button name='ios-menu' size={35} backgroundColor={constants.APP_COLOR} onPress={()=>navigation.openDrawer()}/>
          )
        }}/>
        <DetailsStack.Screen name={constants.MANAGE_TENENT_SCREEN} component={ManageTenentScreen}  />
        <DetailsStack.Screen name={constants.MANAGE_PROPERTIES_SCREEN} component={ManagePropertiesScreen} />
        <DetailsStack.Screen name={constants.ABOUT_US_SCREEN} component={Aboutus}  />
        <DetailsStack.Screen name={constants.PRIVACY_POLICY} component={PrivacyPolicy}  />
        <DetailsStack.Screen name={constants.SUPPORT} component={Support}  />
      </DetailsStack.Navigator>
  );
  
  export default MainTabScreen;