import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Tabs
import DrawerNavigator from './DrawerNavigator';

//Auth
import LoginScreen from '../../app/screens/auth/LoginScreen';
import RegisterScreen from '../../app/screens/auth/RegisterScreen';
import ProfileScreen from '../../app/screens/auth/ProfileScreen';

//Content
import WineScreen from '../../app/screens/content/WineScreen';
import DomainScreen from '../../app/screens/content/DomainScreen';

//Other
import CartScreen from '../../app/screens/CartScreen';
import NotificationScreen from '../../app/screens/NotificationsScreen'

export default function AppNavigator() {
    
    const Stack = createNativeStackNavigator();

    return (
      <Stack.Navigator>

        {/* Drawer Tabs */}
        <Stack.Screen name="Drawer" component={DrawerNavigator} options={{ headerShown: false}}/>

        {/* Auth Screens */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
  
        {/* Content Screens */}
        <Stack.Screen name="Wine" component={WineScreen} />
        <Stack.Screen name="Domain" component={DomainScreen} />

        {/* Other Screens */}
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Notifications" component={NotificationScreen} />

      </Stack.Navigator>
    );
  }