import {createAppContainer} from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import SwiperComponent from './SwiperComponent';


const StackNavigator=createStackNavigator({
    SwiperScreen:{
        screen: SwiperComponent,
        navigationOptions:{
            headerShown: false
        }
    },
    Login:{
        screen: LoginScreen,
        navigationOptions:{
            headerShown:false
        }
    },
    Signup:{
        screen: SignupScreen,
        navigationOptions:{
            headerShown:false
        }
    }
})

export default createAppContainer(StackNavigator);

