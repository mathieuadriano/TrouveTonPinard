import React from 'react';

import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Tabs screens
import HomeScreen from './app/screens/HomeScreen';
import FavoriteScreen from './app/screens/FavoriteScreen';
import CartScreen from './app/screens/CartScreen';
import SettingScreen from './app/screens/SettingSreen';

//Stack screens
  //Auth
import LoginScreen from './app/screens/auth/LoginScreen';
import RegisterScreen from './app/screens/auth/RegisterScreen';
import ProfileScreen from './app/screens/auth/ProfileScreen';
  //Content
import WineScreen from './app/screens/content/WineScreen';
import DomainScreen from './app/screens/content/DomainScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabScreens() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
}

function AppNavigator() {
  return (
    <Stack.Navigator>

      {/* Main App Tabs */}
      <Stack.Screen name="MainTabs" component={TabScreens} options={{ headerShown: false }} />

      {/* Auth Screens */}
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />

      {/* Content Screens */}
      <Stack.Screen name="Wine" component={WineScreen} />
      <Stack.Screen name="Domain" component={DomainScreen} />

    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
