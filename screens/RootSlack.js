import {createAppContainer} from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';

import LandlordLoginScreen from './Landlord/LoginScreen';
import TenentLoginScreen from './Tenent/LoginScreen';
import SwiperComponent from './SwiperComponent';
import LdashboardScreen from './Landlord/Dashboard';
import LManageTenentScreen from './Landlord/ManageTenent';


const StackNavigator=createStackNavigator({
    SwiperScreen:{
        screen: SwiperComponent,
        navigationOptions:{
            headerShown: false
        }
    },
    Landlord:{
        screen: LandlordLoginScreen,
        navigationOptions:{
            headerShown:false
        }
    },
    Tenent:{
        screen: TenentLoginScreen,
        navigationOptions:{
            headerShown:false
        }
},
Ldashboard:{
    screen: LdashboardScreen,
    navigationOptions:{
        headerShown:false
    }
},
Tdashboard:{
    screen: LdashboardScreen,
    navigationOptions:{
        headerShown:false
    }
},
LManageTenent : LManageTenentScreen
})

export default createAppContainer(StackNavigator);

