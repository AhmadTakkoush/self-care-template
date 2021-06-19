import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import React from 'react';

import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import HomeScreen from '../screens/HomeScreen'
import CareScreen from '../screens/CareScreen'
import SettingsScreen from '../screens/SettingsScreen'


const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) =>
(
    <TouchableOpacity style={{top: -30, justifyContent:'center', alignItems:'center', ...styles.shadow}} onPress={onPress}>
        <View style={{
            width:70,
            height:70,
            borderRadius: 35,
            backgroundColor: '#e32f45'
        }}>
            {children}
        </View>
    </TouchableOpacity>
)

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel:false,
                style:{
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right:20,
                    elevation:0,
                    backgroundColor: '#fff',
                    borderRadius: 15,
                    height: 90,
                    ...styles.shadow
                }
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} 
            options={{
                tabBarIcon: ({focused}) =>
                (
                    <View style={{alignItems:'center', justifyContent:'center',top: 5}}>
                          <Image source={require('../assets/icons/home.png')}
                        resizeMode="contain"
                        style={{
                            width:50,
                            height:50,
                            // tintColor: focused ? '#e32f45' : '#748c98',
                        }}
                        />
                        <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>Home</Text>
                    </View>
                ), 
                
                
            }}></Tab.Screen>



            <Tab.Screen name="Care" component={CareScreen}
            
            options={{
                tabBarIcon: ({focused}) =>
               (
                   <Image source={require('../assets/icons/care.png')}
                   resizeMode="contain"
                   style={{
                    width: 30,
                    height: 30,
                    // tintColor: '#fff'
                   }} />
               ),
               tabBarButton:(props) => (
                   <CustomTabBarButton{...props} />
               )
            }}></Tab.Screen>



            <Tab.Screen name="Settings" component={SettingsScreen}
            
            options={{
                tabBarIcon: ({focused}) =>
                (
                    <View style={{alignItems:'center', justifyContent:'center',top: 5}}>
                        <Image
                        source={require('../assets/icons/settings.png')}
                        resizeMode="contain"
                        style={{
                            width:50,
                            height:50,
                            // tintColor: focused ? '#e32f45' : '#748c98'
                        }}
                        />
                        <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>Settings</Text>
                    </View>
                ),
            }}></Tab.Screen>
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor:'#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius:3.5,
        elevation:5,
    }
});

export default Tabs;