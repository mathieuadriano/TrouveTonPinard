import React from "react";
import { Text, View, Image, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from '@expo/vector-icons';
import { palette } from "../../theme/Colors";
import Stars from '../utils/Stars'
import WineScreen from "../../screens/content/WineScreen";
import { useNavigation } from '@react-navigation/native';


export default function WinesList({data}) {
    const navigation = useNavigation();

    const winesData = data
    console.log(winesData)
    const handleNavigateToWineScreen = () => {
        navigation.navigate('Wine', { wine: winesData[0] });
    };
    
    return (
        <View style={styles.scrollViewContainer}>
            <ScrollView horizontal={true} 
            contentContainerStyle={styles.contentContainer}
            showsHorizontalScrollIndicator={false}
        >
            <View style={styles.WinesListItem}>
                <ImageBackground source={require('../../../assets/background1.png')} style={styles.backgroundImage}>
                <Image style={styles.WinesListImg} source={require('../../../assets/test.png')}/>
                    <View style={styles.WinesListData}>
                        <View style={styles.WinesListText}>
                            <Text style={styles.WinesListTitle}>Clos de Vougeot 750 ml</Text>
                            <Stars nb={4} />
                            <Text style={styles.WinesListPrice}>20 €</Text>
                            <TouchableOpacity onPress={handleNavigateToWineScreen}>
                                <View>
                                    <Text style={styles.WinesListProductPage}>Voir la fiche produit</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                    <View style={styles.WinesListIcons}>     
                        <Ionicons name="heart" size={20}  color={palette.pink}/>
                        <View style={styles.iconCart}>
                            <Ionicons name="cart" size={20}  color={palette.whiteText}/>
                        </View>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.WinesListItem}>
                <ImageBackground
                    source={require('../../../assets/background1.png')}
                    style={styles.backgroundImage}
                >
                    <Image 
                        style={styles.WinesListImg}
                        source={require('../../../assets/test.png')}
                    />
                    <View style={styles.WinesListData}>
                        <View style={styles.WinesListText}>
                            <Text style={styles.WinesListTitle}>Vinest Gold Blanc 750 ml</Text>
                            <Stars nb={4} />
                            <Text style={styles.WinesListPrice}>12 €</Text>
                            <View>
                                <Text style={styles.WinesListProductPage}>Voir la fiche produit</Text>
                            </View>
                        </View>
                        <View style={styles.WinesListFavCart}>     
                        </View>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.WinesListItem}>
                <ImageBackground
                    source={require('../../../assets/background1.png')}
                    style={styles.backgroundImage}
                >
                    <Image 
                        style={styles.WinesListImg}
                        source={require('../../../assets/test.png')}
                    />
                    <View style={styles.WinesListData}>
                        <View style={styles.WinesListText}>
                            <Text style={styles.WinesListTitle}>Vinest Gold Blanc 750 ml</Text>
                            <Stars nb={4} />
                            <Text style={styles.WinesListPrice}>12 €</Text>
                            <View>
                                <Text style={styles.WinesListProductPage}>Voir la fiche produit</Text>
                            </View>
                        </View>
                        <View style={styles.WinesListFavCart}>     
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </ScrollView>
        </View>
        
    )
}

const styles = StyleSheet.create({
    scrollViewContainer: {
        height: 150
    },
    contentContainer: {
        display: "flex",
        flexDirection: 'row',
        backgroundColor: palette.F5F5F5,
        paddingHorizontal: '15%',
    },
    WinesListItem: {
        paddingRight: 20,
        width: 320,
    },
    backgroundImage:{
        flex: 1,
        resizeMode: 'contain',
        overflow: 'hidden',
        display: "flex",
        flexDirection: "row",
        justifyContent: 'center',
        gap: 10,
        borderRadius: 20,
        padding: 5,
    },
    WinesListImg: {
        width: 40,
        height: 110
    },
    WinesListData: {
        width: 213,
        display: "flex",
        flexDirection: "row"
    },
    WinesListText: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    WinesListTitle: {
        color: palette.blue,
        fontFamily: "Alpha",
        fontSize: 14,
        letterSpacing: 1,
        fontWeight: "bold",
    },
    WinesListPrice: {
        color: palette.blue,
        fontSize: 14,
        letterSpacing: 1,
        fontWeight: "bold",
    },
    WinesListProductPage: {
        textAlign: 'center',
        color: palette.whiteText
    },
    WinesListFavCart: {

    }
});