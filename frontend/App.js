import React from 'react';
import 'react-native-gesture-handler';

import { StyleSheet, View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';

import AppNavigator from './app/navigators/AppNavigator';
import { palette } from './app/theme/Colors';

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

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


