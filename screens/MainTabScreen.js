import  React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


import { constants } from '../screens/Helper/Constants';
import LandlordLoginScreen from '../screens/Landlord/LoginScreen';
import LandlordRegisterScreen from '../screens/Landlord/RegisterScreen';
import SwiperComponent from '../screens/SwiperComponent';
import DashboardScreen from '../screens/Landlord/Dashboard';
import ServiceScreen from './Landlord/Services';
import MessageScreen from './Landlord/Message';
import UserProfile from './Landlord/UserProfile';


const LoginStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();



const MainTabScreen=()=>(
<Tab.Navigator
      initialRouteName={constants.LANDLORD_DASHBOARD_SCREEN}
      activeColor= {constants.APP_COLOR}
      barStyle={{ backgroundColor: "#ffff" }}
      options={{
        tabBarIcon: ({ color }) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
      >
      <Tab.Screen
        name={constants.DASHBOARD_SCREEN}
        component={DashboardScreenDrawer}
        options={{
          tabBarLabel:constants.DASHBOARD_SCREEN ,
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name= {constants.SERVICES}
        component={ServicesScreenDrawer}
        options={{
          tabBarLabel:constants.SERVICES,
          tabBarIcon: ({ color }) => (
            <Icon name="ios-build" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name= {constants.MESSAGE}
        component={MessagesScreenDrawer}
        options={{
          tabBarLabel: constants.MESSAGE,
          tabBarIcon: ({ color }) => (
            <Icon name="md-mail" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name={constants.USER_PROFILE}
        component={UserScreenDrawer}
        options={{
          tabBarLabel: constants.USER_PROFILE,
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
        <LoginStack.Screen name={constants.LOGIN_SCREEN} component={LandlordLoginScreen} />
        <LoginStack.Screen name={constants.REGISTER_SCREEN} component={LandlordRegisterScreen} />
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
        <DetailsStack.Screen name={constants.DASHBOARD_SCREEN} component={DashboardScreen} options={{
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
        <DetailsStack.Screen name={constants.SERVICES} component={ServiceScreen} options={{
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
        <DetailsStack.Screen name={constants.MESSAGE} component={MessageScreen} options={{
          headerLeft:()=>(
            <Icon.Button name='ios-menu' size={35} backgroundColor={constants.APP_COLOR} onPress={()=>navigation.openDrawer()}/>
          )
        }}/>
      </DetailsStack.Navigator>
  );

  const UserScreenDrawer=({navigation})=>(
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
        <DetailsStack.Screen name={constants.USER_PROFILE} component={UserProfile} options={{
          headerLeft:()=>(
            <Icon.Button name='ios-menu' size={35} backgroundColor={constants.APP_COLOR} onPress={()=>navigation.openDrawer()}/>
          )
        }}/>
      </DetailsStack.Navigator>
  );
  
  
  export default MainTabScreen;