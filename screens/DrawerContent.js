import React from 'react';
import {View,StyleSheet} from 'react-native';
import {DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer';
import {Avatar,Title,Caption,Paragraph,Drawer,Text,TouchableRipple,Switch} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function DrawerContent(props){

    const [isDarkTheme, setIsDarkTheme]= React.useState(false);

    const toggleTheme=()=>{
        setIsDarkTheme(!isDarkTheme)
    }

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row', marginTop:15}}>
                            <Avatar.Image source={{uri:'https://randomuser.me/api/portraits/men/3.jpg'}} size={50}/>
                        <View style={{flexDirection:'column', marginLeft:15}}>
                        <Title style={styles.title}>Udaya Prakash</Title>
                        <Caption style={styles.caption}>@udayaprakash231</Caption>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.section}>
                            <Paragraph style={[styles.paragraph,styles.caption]}>10</Paragraph>
                            <Caption style={styles.caption}>Properties</Caption>
                        </View>
                        <View style={styles.section}>
                            <Paragraph style={[styles.paragraph,styles.caption]}>12</Paragraph>
                            <Caption style={styles.caption}>Tenents</Caption>
                        </View>
                    </View>
                </View>
                <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem 
                    icon={({color,size})=> <Icon name="home-outline" color={color} size={size}/>}
                    label="Home"
                    onPress={()=>{}}/>
                    <DrawerItem 
                    icon={({color,size})=> <Icon name="bookmark-outline" color={color} size={size}/>}
                    label="Properties"
                    onPress={()=>{}}/>
                    <DrawerItem 
                    icon={({color,size})=> <Icon name="account-outline" color={color} size={size}/>}
                    label="Tenents"
                    onPress={()=>{}}/>
                    <DrawerItem 
                    icon={({color,size})=> <Icon name="settings-outline" color={color} size={size}/>}
                    label="Settings"
                    onPress={()=>{}}/>
                    <DrawerItem 
                    icon={({color,size})=> <Icon name="account-check-outline" color={color} size={size}/>}
                    label="Support"
                    onPress={()=>{}}/>
                    <DrawerItem 
                    icon={({color,size})=> <Icon name="account-multiple" color={color} size={size}/>}
                    label="About us"
                    onPress={()=>{}}/>
                </Drawer.Section>
                <Drawer.Section title='Preference'>
                    <TouchableRipple onPress={()=>{toggleTheme()}}>
                        <View style={styles.preference}>
                            <Text>Dark Theme</Text>
                            <View pointerEvents="none">
                                <Switch value={isDarkTheme}/>
                            </View>
                        </View>
                    </TouchableRipple>
                </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                icon={({color,size})=> <Icon name="exit-to-app" color={color} size={size}/>}
                label="Sign Out"
                onPress={()=>{}}/>
            </Drawer.Section>
        </View>

    );
}

const styles=StyleSheet.create({
    drawerContent:{
        flex:1,
    },
    userInfoSection:{
        paddingLeft:20,
    },
    title:{
        fontSize:16,
        marginTop:3,
        fontWeight:'bold',
    },
    caption:{
        fontSize:14,
        lineHeight:14,
    },
    row:{
        marginTop:20,
        flexDirection:'row',
        alignItems:'center',
    },
    section:{
        flexDirection:'row',
        alignItems:'center',
        marginRight:15,
    },
    paragraph:{
        fontWeight:'bold',
        marginRight:3,
    },
    drawerSection:{
        marginTop:15,
    },
    bottomDrawerSection:{
        marginBottom:15,
        borderTopColor:"#f4f4f4",
        borderTopWidth:1
    },
    preference:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:12,
        paddingHorizontal:16,
    },
})