import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions,TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper/src';

export default function App() {
  return (
    <Swiper  
        loop={false}
        dot={<View style={styles.dot}/>}
        activeDot={<View style={styles.activeDot}/>}
        >
        <View style={styles.slide}>
            <View style={styles.header}>
                <Image source={require("../assets/asset1.png")} style={styles.image} resizeMode={"stretch"}/>
            </View>
            <View style={styles.footer}>
                <Text style={styles.title}>Manage your Property Simple</Text>
                <Text style={styles.text}>Easily manage tenents and all you propeties</Text>
            </View>
        </View>
        <View style={styles.slide}>
            <View style={styles.header}>
                <Image source={require("../assets/asset1.png")} style={styles.image} resizeMode={"stretch"}/>
            </View>
            <View style={styles.footer}>
                <Text style={styles.title}>Rental Management Simple</Text>
                <Text style={styles.text}>Easily manage tenents and all you propeties</Text>
            </View>
        </View>
        <View style={styles.slide}>
            <View style={styles.header}>
                <Image source={require("../assets/asset1.png")} style={styles.image} resizeMode={"stretch"}/>
            </View>
            <View style={styles.footer}>
                <Text style={styles.title}>3 Management Simple</Text>
                <Text style={styles.text}>Easily manage tenents and all you propeties propeties propetiespropetiespropeties propeties propeties propeties propeties</Text>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={[styles.button],{
                        borderColor: '#3465d9',
                        borderWidth: 2,
                        borderRadius: 50,
                        marginTop:20
                    }}>
                        <Text style={{color:'#3465d9',fontSize:25}}>  Landlord  </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button],{
                        backgroundColor: '#3465d9',
                        borderRadius: 50,
                        marginTop:20,
                        marginLeft:20
                    }}>
                        <Text style={{color:'white',fontSize:25}}>   Tenent   </Text>
                    </TouchableOpacity>
                </View>
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


