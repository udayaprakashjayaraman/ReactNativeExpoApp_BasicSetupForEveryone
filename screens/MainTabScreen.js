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
      activeColor= {constants.APP_COLOR}
      barStyle={{ backgroundColor: "#ffff" }}
      tabBarBadge={true}      >
      <Tab.Screen
        name={constants.LANDLORD_DASHBOARD_SCREEN}
        component={DashboardScreenDrawer}
        options={{
          tabBarLabel: 'Properties',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name= {constants.MANAGE_TENENT_SCREEN}
        component={ServicesScreenDrawer}
        options={{
          tabBarLabel: 'Services',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-build" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name= {constants.ABOUT_US_SCREEN}
        component={MessagesScreenDrawer}
        options={{
          tabBarLabel: 'Tenent manage',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-notifications" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name={constants.MANAGE_PROPERTIES_SCREEN}
        component={AboutScreenDrawer}
        options={{
          tabBarLabel: 'Properties',
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
  
  
  const DashboardScreenDrawer=({navigation})=>(
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
      </DetailsStack.Navigator>
  );
  
  const ServicesScreenDrawer=({navigation})=>(
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
        <DetailsStack.Screen name={constants.MANAGE_TENENT_SCREEN} component={ManageTenentScreen} options={{
          headerLeft:()=>(
            <Icon.Button name='ios-menu' size={35} backgroundColor={constants.APP_COLOR} onPress={()=>navigation.openDrawer()}/>
          )
        }}/>
      </DetailsStack.Navigator>
  );
  
  const MessagesScreenDrawer=({navigation})=>(
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
        <DetailsStack.Screen name={constants.MANAGE_PROPERTIES_SCREEN} component={ManagePropertiesScreen} options={{
          headerLeft:()=>(
            <Icon.Button name='ios-menu' size={35} backgroundColor={constants.APP_COLOR} onPress={()=>navigation.openDrawer()}/>
          )
        }}/>
      </DetailsStack.Navigator>
  );

  const AboutScreenDrawer=({navigation})=>(
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
      </DetailsStack.Navigator>
  );
  
  
  export default MainTabScreen;