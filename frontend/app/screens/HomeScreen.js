import React from 'react';
import { Text, Button, View, ScrollView, FlatList, StyleSheet } from 'react-native';

import SwitchMap from '../components/SwitchHome/SwitchMap';

import WeeklyWine from '../components/WeeklyWine/WeeklyWine';
import MenuButtons from '../components/MenuButtons/MenuButtons';
import WinesList from '../components/Wines/WinesList';

export default function HomeScreen({ navigation }){
    return(
        <View style={styles.MainView}>
            <ScrollView 
                style={styles.ScrollView}
                contentContainerStyle={styles.contentContainer}
            >
                <View>
                    <SwitchMap />

                </View>
                <WinesList/>
                <WeeklyWine />
                <MenuButtons navigation={navigation} />
            </ScrollView>

            <Button
                title="Go to Wine"
                onPress={() => navigation.navigate('Wine')}
            />
        </View>
        
    )
}

const styles = StyleSheet.create({
    MainView: {
        width: '100%',
        height: '100%',
    },
    ScrollView: {
        width: '100%',
        height: '100%',
    },
    contentContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
});