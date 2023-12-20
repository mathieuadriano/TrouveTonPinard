import React from 'react';
import 'react-native-gesture-handler';

import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';

import AppNavigator from './app/navigators/AppNavigator';

export default function App() {

  const [fontsLoaded] = useFonts({
    "Will": require("./assets/fonts/WillRobinson.ttf"),
    "Alpha": require("./assets/fonts/BC-Alphapipe.otf")
  });

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}


