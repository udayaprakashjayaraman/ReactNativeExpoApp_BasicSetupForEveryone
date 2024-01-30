import React, { useState }  from 'react';
import { StyleSheet, Text, View , TextInput, TouchableOpacity} from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import * as Animatable from 'react-native-animatable';
import { constants } from '../Helper/Constants';

export default function App({navigation}) {
  const [checkTextInputChange, setCheckTextInputChange] = useState(false);
  const [secureTextEntry, setsecureTextEntry] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function textInputChange(value){
    if(value.length!=0){
      setCheckTextInputChange(true);
      setUsername(value);
    }else{
      setCheckTextInputChange(false);
      setUsername(value);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome Landlord!</Text>
      </View>
      <Animatable.View
       animation="fadeInUp"
       style={styles.footer}>
        <Text style={styles.text_footer}>Username</Text>
        <View style={styles.action}>
            <FontAwesome 
             name="user-o"
             color= {constants.APP_COLOR}
             size={20}
            />
            <TextInput
             onChangeText={(text)=>textInputChange(text)}
             placeholder="Your email.."
             style={styles.textInput}
            />
            {checkTextInputChange?
            <Animatable.View
            animation="bounceIn">
            <Feather 
             name='check-circle'
             color='grey'
             size={20}
             />
             </Animatable.View>:null}
        </View>
        <Text style={[styles.text_footer],{marginTop:35}}>Password</Text>
        <View style={styles.action}>
            <FontAwesome 
             name="lock"
             color={constants.APP_COLOR}
             size={20}
            />
            <TextInput
             secureTextEntry={secureTextEntry}
             placeholder="Your Password.."
             style={styles.textInput}
             value={password}
             onChangeText={(text)=>setPassword(text)}
            />
            <TouchableOpacity
           onPress={()=>setsecureTextEntry(!secureTextEntry)}>
            {secureTextEntry?
            <Feather 
             name='eye-off'
             color='grey'
             size={20}
             />:
             <Feather 
             name='eye'
             color='grey'
             size={20}
             />}
            </TouchableOpacity>
        </View>
        <Text style={{color:'#009bd1', marginTop:15}}>Forgot Password?</Text>
        <View style={styles.button}>
        <TouchableOpacity
                            onPress={()=>navigation.navigate(constants.HOME_DRAWER)}
                            style={[styles.signIn],{
                            backgroundColor: constants.APP_COLOR,
                            borderRadius: 50
                        }}>
                            <Text style={{color:'white',fontSize:25, fontWeight:'bold'}}>   Sign In   </Text>
        </TouchableOpacity>
        <Text style={{color:'#009bd1', marginTop:15}}>Login or Register with.. </Text>
        <View style={{flexDirection:'row'}}>
                    <Animatable.View
                    animation={"bounceInLeft"}
                    delay={1}
                    duration={1500}
                    useNativeDriver>
                        <TouchableOpacity
                            onPress={()=>navigation.navigate(constants.HOME_DRAWER)}
                            style={[styles.button],{
                            borderColor: constants.FACEBOOK_COLOR,
                            borderRadius: 50,
                            marginTop:20
                            }}>
                            <FontAwesome name="facebook-square" color= {constants.FACEBOOK_COLOR} size={40}>
                            <Text style={{fontSize:18}}>acebook</Text>
                            </FontAwesome>
                        </TouchableOpacity>
                    </Animatable.View>
                    <Animatable.View
                    animation={"bounceInRight"}
                    delay={1}
                    duration={1500}
                    useNativeDriver>
                        <TouchableOpacity
                            onPress={()=>navigation.navigate(constants.HOME_DRAWER)}
                            style={[styles.button],{
                            borderColor: constants.GOOGLE_COLOR,
                            borderRadius: 50,
                            marginTop:20,
                            marginLeft:20
                            }}>
                            <FontAwesome name="google" color={constants.GOOGLE_COLOR} size={40}>
                            <Text style={{fontSize:18}}>oogle</Text>
                            </FontAwesome>
                        </TouchableOpacity>
                    </Animatable.View>
                </View>
        </View>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#05375a'
  },
  header:{
    flex:1,
    justifyContent:'flex-end',
    paddingHorizontal:20,
    paddingBottom:50
  },
  footer:{
    flex:2,
    backgroundColor:'#ffffff',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    paddingHorizontal:20,
    paddingVertical:30
  },
  text_header:{
    color:'#ffffff',
    fontWeight:'bold',
    fontSize:30,
  },
  text_footer:{
    color:'#05375a',
    fontSize:18
  },
  action:{
    flexDirection:"row",
    marginTop:10,
    borderBottomWidth:1,
    borderBottomColor:'#f2f2f2',
    paddingBottom:5
  },
  textInput:{
    flex:1,
    paddingLeft:10,
    color:'#05375a'
  },
  button:{
    alignItems:'center',
    marginTop:30
  },
  signIn:{
    width:'100%',
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10
  }
});
