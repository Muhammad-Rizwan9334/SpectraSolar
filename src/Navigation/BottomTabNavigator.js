import {View, Text, Image} from 'react-native';
import React from 'react';
import Home from '../Screens/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Documents from '../Screens/Documents';
import Media from '../Screens/Media';



const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#8DC63F',
        tabBarInactiveTintColor: '#000',
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarStyle: {
          height: 60,
          alignItems: 'center',
        },
      }}>
      <Tab.Screen
        name="TabHome"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({size, color}) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="TabDocuments"
        component={Documents}
        options={{
          title: 'Documents',
          tabBarIcon: ({size, color}) => (
            <Ionicons name="document-text-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="TabMedia"
        component={Media}
        options={{
          title: 'Media',
          tabBarIcon: ({size, color}) => (
            <MaterialIcons name="perm-media" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Contacts"
        component={Home}
        options={{
          title: 'Contacts',
          tabBarIcon: ({size, color}) => (
            <Feather name="phone" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
