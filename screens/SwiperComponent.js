import React, { useState }  from 'react';
import { StyleSheet, Text, View, Image, Dimensions,TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper/src';
import * as Animatable from 'react-native-animatable';

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
                            onPress={()=>navigation.navigate("Landlord")}
                            style={[styles.button],{
                            borderColor: '#3465d9',
                            borderWidth: 2,
                            borderRadius: 50,
                            marginTop:20
                            }}>
                            <Text style={{color:'#3465d9',fontSize:25,fontFamily:'Cochin'}}>  Landlord  </Text>
                        </TouchableOpacity>
                    </Animatable.View>
                    <Animatable.View
                    animation={animation_tenent}
                    delay={0}
                    duration={1500}
                    useNativeDriver>
                        <TouchableOpacity
                            onPress={()=>navigation.navigate("Tenent")}
                            style={[styles.button],{
                            backgroundColor: '#3465d9',
                            borderRadius: 50,
                            marginTop:20,
                            marginLeft:20
                        }}>
                            <Text style={{color:'white',fontSize:25, fontFamily:'Cochin'}}>   Tenent   </Text>
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
      color: '#3465d9',
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
      backgroundColor: '#3465d9',
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


