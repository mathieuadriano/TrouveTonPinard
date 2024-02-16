import React from 'react';
import 'react-native-gesture-handler';

import { StyleSheet, View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';

import AppNavigator from './app/navigators/AppNavigator';
import { palette } from './app/theme/Colors';
export default function App() {

  const [fontsLoaded] = useFonts({
    "Will": require("./assets/fonts/WillRobinson.ttf"),
    "Alpha": require("./assets/fonts/BC-Alphapipe.otf")
  });

  if (!fontsLoaded) {
    return <View><Text>Loading...</Text></View>;
  }
  
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}


