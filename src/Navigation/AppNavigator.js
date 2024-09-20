import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Screens/Login';
import Splash from '../Screens/Splash';
import BottomTabNavigator from './BottomTabNavigator';
import Checklist from './Checklist';
import ChecklistSecurity from '../Screens/ChecklistSecurity';
import CustomBottomSheet from '../Screens/CustomBottomSheet';
import Media from '../Screens/Media';
import MediaList from '../Screens/Media';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={BottomTabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Checklist"
          component={Checklist}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ChecklistSecurity"
          component={ChecklistSecurity}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CustomBottomsheet"
          component={CustomBottomSheet}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Documents"
          component={BottomTabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Media"
          component={Media}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
