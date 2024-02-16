import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, ImageBackground, Image, Dimensions } from 'react-native';
import * as Progress from 'react-native-progress';
import MenuButtons from '../components/MenuButtons/MenuButtons'
import Slider from '@react-native-community/slider';
import { palette } from '../theme/Colors';
import Icon from '../../assets/logo.png';

const { width, height } = Dimensions.get('window');


export default function TrouverMonPinard({ navigation }) {
    const totalSteps = 6;
    const initialSelections = {};
    const initialBudget = 50;

    const [currentStep, setCurrentStep] = useState(1);
    const [selections, setSelections] = useState(initialSelections);
    const [budget, setBudget] = useState(initialBudget);

    const resetForm = () => {
        setCurrentStep(1);
        setSelections(initialSelections);
        setBudget(initialBudget);
    };

    const handleOptionSelect = (option) => {
        setSelections({ ...selections, [currentStep]: option });
        if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1);
        }
    };

    const choiceIcons = {
        "Le déjeuner": Icon,
        "l'apéro": Icon,
        "le diner": Icon,
        "Plat en sauce": Icon, 
        "viande rouge": Icon, 
        "viande blanche": Icon, 
        "poisson": Icon, 
        "fromage": Icon, 
        "dessert sucré": Icon, 
        "dessert fruité": Icon,
        "charcuterie": Icon, 
        "fromage": Icon,
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
            default:
                return <Text>Unknown step</Text>;
        }
    };

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
                onSlidingComplete={() => handleOptionSelect(budget)}
            />
            <Text>Budget: {budget}€</Text>
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
                        <Progress.Bar progress={(currentStep - 1) / (totalSteps - 1)} width={null} />
                        <Text style={styles.progressText}>{progressPercentage}% Complete</Text>
                    </View>
                </ScrollView>

                {/* Menu at the bottom */}
                <View style={styles.menu}>
                    <MenuButtons />
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
        width: 50,
        height: 50,
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
});