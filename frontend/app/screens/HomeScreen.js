import React from 'react';
import { Text, Button } from 'react-native';

export default function HomeScreen({navigation}){

    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => <Button
          title="Profile"
          onPress={() => navigation.navigate('Profile')}
        />
        });
      }, [navigation]);

    return(
        <>
            <Text>HomeScreen</Text>
            <Button
                title="Go to Wine"
                onPress={() => navigation.navigate('Wine')}
            />
        </>
        
    )
}