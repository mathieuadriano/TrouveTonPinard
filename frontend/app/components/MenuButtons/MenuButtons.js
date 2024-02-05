import React from "react"

import { Text, View, StyleSheet, Pressable } from "react-native"

import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 

import { palette } from "../../theme/Colors";

export default function MenuButtons({ navigation }){
    return(
        <View style={styles.MenuContainer}>
            <Pressable 
                onPress={() => navigation.navigate('Cart')}
            >
                <AntDesign name="shoppingcart" size={24} color={palette.blue} />
            </Pressable>

            <Pressable 
                onPress={() => navigation.navigate('Notifications')}
            >
                <Ionicons name="notifications-outline" size={24}  color={palette.blue}/>
            </Pressable>

            <Pressable  
                onPress={() => navigation.navigate('Profile')}
            >
                <AntDesign name="user" size={24} color={palette.blue} />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    MenuContainer: {
        width: 320,
        height: 75,

        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        backgroundColor: palette.whiteText,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
        

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    MenuButtons: {
        
    },
});