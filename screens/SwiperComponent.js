import React, { useState }  from 'react';
import { StyleSheet, Text, View, Image, Dimensions,TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper/src';
import * as Animatable from 'react-native-animatable';
import { constants } from './Helper/Constants';

export default function App({ navigation }) {
    const [animation_landlord, setAnimation_landlord] = useState(null);
    const [animation_tenent, setAnimation_tenent] = useState(null);
    const [show, setShow] = useState(false);

    function onIndexChanged(index){
        if(index==2){
            setAnimation_landlord('bounceInLeft');
            setAnimation_tenent('bounceInRight');
            setShow(true);
        }
        else{
            setAnimation_landlord(null);
            setAnimation_tenent(null);
            setShow(false);
        }
    }
  return (
    <Swiper  
        loop={false}
        dot={<View style={styles.dot}/>}
        activeDot={<View style={styles.activeDot}/>}
        onIndexChanged={(index)=>onIndexChanged(index)}
        >
        <View style={styles.slide}>
            <View style={styles.header}>
                <Image source={require("../assets/images/swipeHome.png")} style={styles.image} resizeMode={"stretch"}/>
            </View>
            <View style={styles.footer}>
                <Text style={styles.title}>All at one place</Text>
                <Text style={styles.text}>Ideal for busy landlords or landlords who cannot visit the property regularly. We helps to manage, collect payments, and track expenses for both landlord and tenent.</Text>
            </View>
        </View>
        <View style={styles.slide}>
            <View style={styles.header}>
                <Image source={require("../assets/images/swipeComplaintManagement.png")} style={styles.image} resizeMode={"stretch"}/>
            </View>
            <View style={styles.footer}>
                <Text style={styles.title}>Complaint Management</Text>
                <Text style={styles.text}>Respond to customer complaints quickly and solve their concerns with ease.</Text>
            </View>
        </View>
        <View style={styles.slide}>
            <View style={styles.header}>
                <Image source={require("../assets/images/swipeManage.png")} style={styles.image} resizeMode={"stretch"}/>
            </View>
            <View style={styles.footer}>
                <Text style={styles.title}>Property {"\u0026"} Rental Management</Text>
                <Text style={styles.text}>Enter as</Text>
                {show?
                <View style={{flexDirection:'row'}}>
                    <Animatable.View
                    animation={animation_landlord}
                    delay={0}
                    duration={1500}
                    useNativeDriver>
                        <TouchableOpacity
                            onPress={()=>navigation.navigate(constants.LOGIN_SCREEN)}
                            style={[styles.button],{
                            borderColor: constants.APP_COLOR,
                            borderWidth: 2,
                            borderRadius: 50,
                            marginTop:20
                            }}>
                            <Text style={{color:constants.APP_COLOR,fontSize:25}}>  Login  </Text>
                        </TouchableOpacity>
                    </Animatable.View>
                    <Animatable.View
                    animation={animation_tenent}
                    delay={0}
                    duration={1500}
                    useNativeDriver>
                        <TouchableOpacity
                            onPress={()=>navigation.navigate(constants.REGISTER_SCREEN)}
                            style={[styles.button],{
                            backgroundColor: constants.APP_COLOR,
                            borderRadius: 50,
                            marginTop:20,
                            marginLeft:20
                        }}>
                            <Text style={{color:'white',fontSize:25}}>   Signup   </Text>
                        </TouchableOpacity>
                    </Animatable.View>
                </View>
                :null}
            </View>
        </View>
    </Swiper>
  );
}

const {width, height}=Dimensions.get("screen");
const height_image= height * 0.5 * 0.8;
const width_image= height_image *1.1;
const width_button= width * 0.3;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    backgroundColor: 'white',
  },
  header:{
      flex: 2,
      justifyContent:'center',
      alignItems:'center'
  },
  footer:{
      flex:1,
      alignItems:'center',
      paddingHorizontal:20
  },
  image:{
    height: height_image,
    width: width_image
  },
  title:{
      fontSize:25,
      fontWeight:'bold',
      color: constants.APP_COLOR,
      textAlign: 'center'
  },
  text:{
      color: 'gray',
      textAlign:'center',
      marginTop:20
  },
  dot:{
      backgroundColor: 'rgba(52,101,217,.4)',
      width:8,
      height:8,
      borderRadius:4,
      marginHorizontal:5,
      marginVertical:3
  },
  activeDot:{
      backgroundColor: constants.APP_COLOR,
      width:20,
      height:8,
      borderRadius:4,
      marginHorizontal:5,
      marginVertical:3
  },
  button:{
      width: width_button,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center'
  }
});


