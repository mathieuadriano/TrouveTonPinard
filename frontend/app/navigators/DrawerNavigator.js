import { palette } from '../theme/Colors';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image } from 'react-native';

import HomeScreen from '../screens/HomeScreen'
import TrouverMonPinardScreen from '../screens/TrouverMonPinardScreen'
import ProfileScreen from '../screens/auth/ProfileScreen';
import FavoriteScreen from '../screens/FavoriteScreen'

export default function DrawerNavigator() {

    const Drawer = createDrawerNavigator();

    return (
      <Drawer.Navigator
        screenOptions={{
            drawerStyle: {
              width: '100%',
              backgroundColor: palette.blue
            },
            drawerLabelStyle: {
                color: palette.whiteText,
                textAlign: 'center'
            }
        }}
      >
        <Drawer.Screen 
            name="Home" 
            component={HomeScreen}
            options={{
                headerRight: (props) => <LogoTitle {...props} />,
                headerStyle: {
                    backgroundColor: palette.blue
                },
        }}
        />
        <Drawer.Screen name="Trouver mon Pinard" component={TrouverMonPinardScreen} />
        <Drawer.Screen name="Mon compte" component={ProfileScreen} />
        <Drawer.Screen name="Favoris" component={FavoriteScreen} />
        <Drawer.Screen name="Notifications" component={ProfileScreen} />
        <Drawer.Screen name="Paramètres" component={ProfileScreen} />
      </Drawer.Navigator>
    );
  }

  function LogoTitle() {
    return (
      <Image
        style={{ width: 50, height: 50 }}
        source={require('../../assets/logo.png')}
      />
    );
  }