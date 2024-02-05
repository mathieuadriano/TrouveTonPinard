import React from 'react';
import { Text, Button, View, ScrollView, StyleSheet, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import SwitchMap from '../components/SwitchHome/SwitchMap';

import WeeklyWine from '../components/WeeklyWine/WeeklyWine';
import MenuButtons from '../components/MenuButtons/MenuButtons';
import WinesList from '../components/Wines/WinesList';
import { palette } from '../theme/Colors';

export default function HomeScreen({ navigation }){

    const navigateToTrouverMonPinardScreen = () => {
        navigation.navigate('Trouver mon Pinard');
    };

    return(
        <ScrollView style={styles.ScrollView}>
            <ImageBackground
                source={require('../../assets/vagues1.png')}
                style={styles.MainBg}
            >
                <View style={styles.Section1}>
                    <ImageBackground
                        source={require('../../assets/background3.png')}
                        style={styles.BgWave}
                    >
                        <View style={styles.titles}>
                            <SwitchMap />
                            <View style={styles.titles_content}>
                                <Text style={styles.welcome}>Bienvenue</Text>
                                <Text style={styles.text}>Besoin d'aide pour trouver l'accord parfait entre un vin et ton plat ?</Text>
                            </View>
                        </View>
                        <View style={styles.bottom}>
                            <TouchableOpacity style={styles.button} onPress={navigateToTrouverMonPinardScreen}><Text style={styles.button_text}>TROUVE TON PINARD</Text></TouchableOpacity>
                            <View style={styles.bottom_content}>
                                <View style={styles.bottom_text}>
                                    <Text style={styles.bottom_text_1}>La flemme de faire le questionnaire ?</Text>
                                    <Text style={styles.bottom_text_2}>Trouve ton pinard parmi nos sélections</Text>
                                </View>
                                <AntDesign name="down" size={16} color="white" />
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.Section2}>
                    <View style={styles.section2_container}>
                        <WinesList/>
                        <WeeklyWine />
                        <MenuButtons navigation={navigation} />
                    </View>
                </View> 
            </ImageBackground>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    ScrollView: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    MainBg: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    Section1: {
        height: Dimensions.get('window').height - 110
    },
    BgWave: {
        resizeMode: 'cover',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    titles: {
        width: '90%',
        height: '40%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titles_content: {
        gap: 20
    },
    welcome: {
        color: palette.pink,
        fontFamily: 'Will',
        fontSize: '42',
        textAlign: 'center'
    },
    text: {
        color: palette.grey,
        fontSize: '14',
        fontWeight: '700',
        textAlign: 'center'
    },
    bottom: {
        height: '40%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    button: {
        backgroundColor: palette.blue,
        width: 320,
        height: 75,
        borderRadius: 15,

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'

    },
    button_text: {
        color: palette.whiteText,
        fontFamily: 'Alpha',
        fontSize: 18
    },
    bottom_content: {
        display: 'flex',
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    bottom_text: {

    },
    bottom_text_1: {
        color: palette.whiteText,
        fontSize: '14',
        fontWeight: '700',
        textAlign: 'left'
    },
    bottom_text_2: {
        color: palette.whiteText,
        fontSize: '14',
        fontWeight: '300',
        textAlign: 'left'
    },

    Section2: {
        height: Dimensions.get('window').height - 110,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    section2_container: {
        height: '90%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
});