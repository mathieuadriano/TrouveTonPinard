import { Text, ImageBackground, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

import MenuButtons from '../../components/MenuButtons/MenuButtons';
import { palette } from '../../theme/Colors'

export default function ProfileScreen({ navigation }){
      
    return(
        <ImageBackground source={require('../../../assets/vagues1.png')} style={styles.BgWave}>
            <View style={styles.container}>
                <View style={styles.top}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.goBack();
                        }}
                    >
                        <Image source={require('../../../assets/arrow-left.png')} style={styles.arrowIcon} />
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.welcome}>Bienvenue</Text>
                        <Text style={styles.name}>Juliette</Text>
                    </View>
                    <Ionicons name="person" size={50}  color={palette.pink}/>
                </View>
                <View style={styles.card}>
                    <Text style={styles.header}>Mon Compte</Text>
                    <View style={styles.buttons}>
                        <View style={styles.aera}>
                            <TouchableOpacity style={styles.aeraBtn} onPress={() => navigation.navigate('Panier')}>
                                <Ionicons name="cart" size={36}  color={palette.pink}/>
                                <Text style={styles.aeraTitle}>Panier</Text>
                            </TouchableOpacity>
                            <View style={styles.line}></View>
                        </View>
                        <View style={styles.aera}>
                            <TouchableOpacity style={styles.aeraBtn} onPress={() => navigation.navigate('Favoris')}>
                                    <Ionicons name="heart" size={36}  color={palette.pink}/>
                                    <Text style={styles.aeraTitle}>Favoris</Text>
                            </TouchableOpacity>
                            <View style={styles.line}></View>
                        </View>
                    </View>
                    <View style={styles.settings}>
                        <TouchableOpacity onPress={() => navigation.navigate('Paramètres')}><Ionicons name="settings" size={24}  color={palette.pink}/></TouchableOpacity>
                    </View>
                </View>
                <View style={styles.menu}>
                    <MenuButtons navigation={navigation} />
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    BgWave: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    container: {
        width: '80%',
        height: '95%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    top:{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 10
    },
    userAera:{
        width: '95%',
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    welcome:{
        fontFamily: 'Alpha',
        fontSize: '32',
        color: palette.black,
        textAlign: 'center'
    },
    name:{
        color: palette.pink,
        fontSize: '24',
        textAlign: 'center'
    },
    card: {
        width: '100%',
        height: 400,
        backgroundColor: 'white',
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderRadius: 50,
        shadowOpacity: 0.25,
        shadowRadius: 5,
        shadowColor: 'black',
        shadowOffset: { height: 0, width: 0 },
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    header: {
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center',
        letterSpacing: 1.2,
        paddingTop: 10,
        color: palette.pink
    },
    buttons: {
        width: '95%',
    },
    aera: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingVertical: 15,
    },
    aeraBtn: {
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 10,
        paddingVertical: 5,
    },
    aeraTitle: {
        fontSize: 20,
        fontWeight: '600',
        letterSpacing: 1.2,
        color: palette.grey,
    },
    line:{
        width: '100%',
        backgroundColor: palette.black,
        height: 1
    },
    settings: {
        width: '100%',
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'flex-end',
    },
    menu: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
})