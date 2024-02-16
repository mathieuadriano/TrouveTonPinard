import { Text, ImageBackground, View, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import Stars from '../components/utils/Stars';
import { useState } from 'react';
import MenuButtons from '../components/MenuButtons/MenuButtons';
import { palette } from '../theme/Colors'

const winesData = [
    { id: '1', name: 'Clos de Vougeot', volume: '750 ml', price: '20 €', rating: 2, type: 'ROUGE' },
    { id: '2', name: 'Château Rothschild', volume: '750 ml', price: '50 €', rating: 2, type: 'BLANC' },
    { id: '3', name: 'Montrachet Grand Cru', volume: '500 ml', price: '50 €', rating: 3, type: 'BLANC' },
    { id: '4', name: 'Hermitage La Chapelle', volume: '500 ml', price: '40 €', rating: 1, type: 'BLANC' },
    { id: '5', name: 'Clos de Vougeot', volume: '500 ml', price: '35 €', rating: 4, type: 'ROSE' },
    { id: '6', name: 'Montrachet Grand Cru', volume: '1 L', price: '15 €', rating: 4, type: 'ROUGE' },
    { id: '7', name: 'Clos de Vougeot', volume: '1 L', price: '30 €', rating: 5, type: 'ROSE' },
  ];
  

export default function FavoriteScreen({ navigation }){

    const [selectedFilter, setSelectedFilter] = useState('BLANC');

  const filters = ['BLANC', 'ROUGE', 'ROSE'];

  const renderWineItem = ({ item }) => (
    <ImageBackground source={require('../../assets/background1.png')} style={styles.backgroundImage}>
        <Image style={styles.WinesListImg} source={require('../../assets/test.png')}/>
        <View style={styles.WinesListData}>
            <View style={styles.WinesListText}>
                <Text style={styles.WinesListTitle}>{item.name} {item.volume}</Text>
                <Stars nb={4} />
                <Text style={styles.WinesListPrice}>{item.price}</Text>
                <View>
                    <Text style={styles.WinesListProductPage}>Voir la fiche produit</Text>
                </View>
            </View>
            
        </View>
        <View style={styles.WinesListIcons}>     
            <Ionicons name="heart" size={20}  color={palette.pink}/>
            <View style={styles.iconCart}>
                <Ionicons name="cart" size={20}  color={palette.whiteText}/>
            </View>
        </View>
    </ImageBackground>
  );
    return(
        <ImageBackground source={require('../../assets/vagues1.png')} style={styles.BgWave}>
            <View style={styles.container}>
                <View style={styles.top}>
                    <TouchableOpacity style={styles.arrowBack}
                        onPress={() => {
                            navigation.goBack();
                        }}
                    >
                        <Image source={require('../../assets/arrow-left.png')} style={styles.arrowIcon} />
                    </TouchableOpacity>
                    <View width='50%'>
                        <Text style={styles.title}>FAVORIS</Text>
                    </View>
                </View>

                <View style={styles.filterContainer}>
                    {filters.map((filter) => (
                        <TouchableOpacity
                            key={filter}
                            style={[
                            styles.filterButton,
                            selectedFilter === filter && styles.filterButtonSelected,
                            ]}
                            onPress={() => setSelectedFilter(filter)}
                        >
                            <Text
                                style={[
                                    styles.filterText
                                ]}
                            >
                                {filter}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                
                <FlatList
                    data={winesData.filter(wine => wine.type === selectedFilter)}
                    renderItem={renderWineItem}
                    keyExtractor={(item) => item.id}
                />
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
        justifyContent: 'flex-start',
        paddingBottom: 10
    },
    arrowBack:{
        width: '25%',
    },

    title:{
        fontFamily: 'Will',
        fontSize: '24',
        color: palette.black,
        textAlign: 'center',
        width: '100%'
    },

    filterContainer: {
        width: '75%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
    filterButton: {
        paddingVertical: 5,
        paddingHorizontal: 18,
        borderRadius: 30,
        backgroundColor: palette.grey
    },
    filterButtonSelected: {
        backgroundColor: palette.pink,
    },
    filterText: {
        color: palette.whiteText,
        fontSize: 10
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
        marginVertical: 15
    },
    WinesListImg: {
        width: '15%',
        height: 110
    },
    WinesListData: {
        width: 180,
        display: "flex",
        flexDirection: "row",
        justifyContent: 'center'
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
    WinesListIcons: {
        width: '10%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    iconCart:{
        width: 30,
        height: 30,
        backgroundColor: palette.blue,
        borderRadius: 100,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },


    menu: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
})