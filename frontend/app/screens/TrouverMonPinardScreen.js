import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, ImageBackground, Image, Dimensions, ActivityIndicator } from 'react-native';
import * as Progress from 'react-native-progress';
import MenuButtons from '../components/MenuButtons/MenuButtons'
import Slider from '@react-native-community/slider';
import Stars from '../components/utils/Stars';
import { Ionicons } from '@expo/vector-icons'; 
import { palette } from '../theme/Colors';

import Icon from '../../assets/logo.png';

import dejeuner from '../../assets/icons/dejeuner.png';
import apero from '../../assets/icons/apero.png';
import diner from '../../assets/icons/diner.png';

import plat from '../../assets/icons/dejeuner.png';
import vianderouge from '../../assets/icons/vianderouge.png';
import viandeblanche from '../../assets/icons/viandeblanche.png';
import poisson from '../../assets/icons/poisson.png';
import coquillage from '../../assets/icons/coquillage.png';
import crustrace from '../../assets/icons/crustrace.png';
import fromage from '../../assets/icons/fromage.png';
import dessertfruite from '../../assets/icons/dejeuner.png';
import dessertsucree from '../../assets/icons/dejeuner.png';

const { width, height } = Dimensions.get('window');


export default function TrouverMonPinard({ navigation }) {
    const totalSteps = 7;
    const initialSelections = {};
    const initialBudget = 50;

    const [currentStep, setCurrentStep] = useState(1);
    const [selections, setSelections] = useState(initialSelections);
    const [budget, setBudget] = useState(initialBudget);
    const [isLoading, setIsLoading] = useState(false);

    const resetForm = () => {
        setCurrentStep(1);
        setSelections(initialSelections);
        setBudget(initialBudget);
        setIsLoading(false);
    };

    const handleOptionSelect = (option) => {
        setSelections({ ...selections, [currentStep]: option });
        if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1);
        }
        if (currentStep === totalSteps - 1) {
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
                // Transition to the final empty return after loading
                setCurrentStep(currentStep + 1);
            }, 2000); // Loading animation for 2 seconds
        }
    };

    const choiceIcons = {
        "Le déjeuner": dejeuner,
        "l'apéro": apero,
        "le diner": diner,
        "Plat en sauce": dejeuner, 
        "viande rouge": vianderouge, 
        "viande blanche": viandeblanche, 
        "poisson": poisson, 
        "fromage": fromage, 
        "dessert sucré": dessertsucree, 
        "dessert fruité": dessertfruite,
        "charcuterie": apero, 
        "fromage": fromage,
        "crudité": Icon,
        "gateaux apéro": Icon,
        "repas frais": Icon,
        "débutant": Icon,
        "intermédiaire": Icon, 
        "expert": Icon, 
        "maitre": Icon, 
        "vin pétillant": Icon, 
        "vin blanc": Icon, 
        "vin rouge": Icon, 
        "rosé": Icon
    };

    const renderStepContent = () => {
        if (isLoading) {
            return <ActivityIndicator size="large" color={palette.pink} />;
        }
        switch (currentStep) {
            case 1:
                return renderChoices("C'est pour ...", ["Le déjeuner", "l'apéro", "le diner"]);
            case 2:
                return renderChoices(`Pour le ${selections[1]} quel est ton accompagnement pour le vin`, ["Plat en sauce", "viande rouge", "viande blanche", "poisson", "fromage", "dessert sucré", "dessert fruité"]);
            case 3:
                return renderChoices("Quel est ton accompagnement pour le vin", ["charcuterie", "fromage", "crudité", "gateaux apéro", "repas frais"]);
            case 4:
                return renderChoices("Quelle est ta connaissance dans le vin", ["débutant", "intermédiaire", "expert", "maitre"]);
            case 5:
                return renderChoices("On a trouvé quoi te conseiller mais tu préfères quel type de vin", ["vin pétillant", "vin blanc", "vin rouge", "rosé"]);
            case 6:
                return renderSlider();
            case 7:
                return result();
            default:
                return <Text>Unknown step</Text>;
        }
    };

    const result = () => (

        <View>
            <ImageBackground source={require('../../assets/background1.png')} style={styles.backgroundImage}>
            <Image style={styles.WinesListImg} source={require('../../assets/test.png')}/>
            <View style={styles.WinesListData}>
                <View style={styles.WinesListText}>
                    <Text style={styles.WinesListTitle}>Clos de Vougeot 750 ml</Text>
                    <Stars nb={4} />
                    <Text style={styles.WinesListPrice}>20 €</Text>
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
        </View>
        
    )
    const renderChoices = (title, choices) => (
        <View>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.choiceRow}>
                {choices.map((choice, index) => (
                    <TouchableOpacity 
                        key={index} 
                        style={styles.choiceButton} 
                        onPress={() => handleOptionSelect(choice)}
                    >
                        <Image source={choiceIcons[choice]} style={styles.choiceIcon} />
                        <Text style={styles.choiceText}>{choice}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );

    const renderSlider = () => (
        <View>
            <Text style={styles.title}>Quel est ton budget maximum</Text>
            <Slider
                style={styles.slider}
                minimumValue={10}
                maximumValue={200}
                step={1}
                value={budget}
                onValueChange={setBudget}
            />
            <Text>Budget: {budget}€</Text>
            <TouchableOpacity
                style={styles.confirmButton}
                onPress={() => handleOptionSelect(budget)}
            >
                <Text style={styles.confirmButtonText}>Confirm</Text>
            </TouchableOpacity>
        </View>
    );

    const progressPercentage = Math.round(((currentStep - 1) / (totalSteps - 1)) * 100);

    return (
        <ImageBackground source={require('../../assets/vagues1.png')} style={styles.BgWave}>
            <View style={styles.container}>

                {/* Arrow at the top */}
                <TouchableOpacity style={styles.returnArrow} onPress={() => {
                    resetForm();
                    navigation.goBack();
                }}>
                    <Image source={require('../../assets/arrow-left.png')} style={styles.arrowIcon} />
                </TouchableOpacity>

                {/* Scrollable form content in the middle */}
                <ScrollView style={styles.scrollView}>
                    <View style={styles.form}>
                        {renderStepContent()}
                        {currentStep < totalSteps && (
                            <>
                                <Progress.Bar progress={(currentStep - 1) / (totalSteps - 1)} width={null} />
                                <Text style={styles.progressText}>{progressPercentage}% Complete</Text>
                            </>
                        )}
                    </View>
                </ScrollView>

                {/* Menu at the bottom */}
                <View style={styles.menu}>
                    <MenuButtons navigation={navigation}/>
                </View>
            </View>
        </ImageBackground>
    );
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
        width: '90%',
        flex: 1,
        justifyContent: 'space-around',
    },
    returnArrow: {
        marginTop: 20,
        marginLeft: 10,
    },
    scrollView: {
        flex: 1,
    },
    form: {
        width: '100%',
        borderRadius: 10,
    },
    menu: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginBottom: 20
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 20,
        alignSelf: 'center',
        textAlign: 'center',
        color: palette.pink,
    },
    choiceRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
    choiceButton: {
        width: 130,
        height: 130,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 5,
    },
    choiceText: {
        fontSize: 16,
        textAlign: 'center',
    },
    choiceIcon: {
        width: 30,
        height: 30,
    },
    slider: {
        width: '100%',
        height: 40,
    },
    progressText: {
        textAlign: 'center',
        paddingTop: 5,
        fontSize: 16,
    },
    returnArrow: {
        padding: 10,
    },
    arrowIcon: {
        width: 25,
        height: 25,
    },
    confirmButton: {
        marginTop: 20,
        backgroundColor: palette.blue,
        padding: 10,
        borderRadius: 5,
        alignSelf: 'center',
    },
    confirmButtonText: {
        color: '#fff',
        fontSize: 18,
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
        height: 130
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
});