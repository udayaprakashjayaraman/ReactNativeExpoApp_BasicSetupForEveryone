import {createAppContainer} from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';

import LandlordScreen from './LandlordScreen';
import TenentScreen from './TenentScreen';
import SwiperComponent from './SwiperComponent';
import LdashboardScreen from './Landlord/Dashboard'


const StackNavigator=createStackNavigator({
    SwiperScreen:{
        screen: SwiperComponent,
        navigationOptions:{
            headerShown: false
        }
    },
    Landlord:{
        screen: LandlordScreen,
        navigationOptions:{
            headerShown:false
        }
    },
    Tenent:{
        screen: TenentScreen,
        navigationOptions:{
            headerShown:false
        },
    Ldashboard:{
        screen: LdashboardScreen,
        navigationOptions:{
            headerShown:true
        }
    }
}
})

export default createAppContainer(StackNavigator);

