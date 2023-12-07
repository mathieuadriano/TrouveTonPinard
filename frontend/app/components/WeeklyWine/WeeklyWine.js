import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { palette } from "../../theme/Colors";

export default function WeeklyWine() {
    
    return (
        <View style={styles.WeeklyWineMain}>
            <Text style={styles.WeeklyWineTitle}>Le Vin de la semaine</Text>
            <View style={styles.WeeklyWineContent}>
                <Image 
                    style={styles.WeeklyWineImg}
                    source={require('../../../assets/histoires-de-jean.png')}
                />
                <View style={styles.WeeklyWineDesc}>
                    <View style={styles.WeeklyWineDescText}>
                        <View style={styles.WeeklyWineDescContent}>
                            <Text style={styles.WeeklyWineName}>
                                HISTOIRES DE JEAN - 750 ml
                            </Text>
                            <Text style={styles.WeeklyWineDomains}>
                                Le clos d'Isidor
                            </Text>
                        </View>
                        
                        <Text style={styles.WeeklyWinePrice}>
                            9,62 €
                        </Text>
                    </View>
                    <View style={styles.WeeklyWineButtons}>
                        <TouchableOpacity style={styles.WeeklyWineButton}></TouchableOpacity>
                        <TouchableOpacity style={styles.WeeklyWineButton}></TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    WeeklyWineMain: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

        width: "70%",
        height: 300,
        
        backgroundColor: palette.whiteText,

        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
    },
    WeeklyWineTitle: {
        padding: 20,
        
        color: palette.grey,
        fontWeight: "700"
    },
    WeeklyWineContent: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",

        width: "90%",
        height: "70%"
    },
    WeeklyWineImg: {
        width: "20%",
        height: 120,
    },
    WeeklyWineDesc: {
        width: "70%",
    },
    WeeklyWineDescText: {

    },
    WeeklyWineDescContent: {

    },
    WeeklyWineName:{
        fontFamily: "Alpha",
        color: palette.pink
    },
    WeeklyWineDomains: {
        fontFamily: "Alpha",
        color: palette.pink
    },
    WeeklyWinePrice: {
        fontFamily: "Alpha",
        color: palette.grey,
    },
    WeeklyWineButtons: {

    },
    WeeklyWineButton: {

    }
});