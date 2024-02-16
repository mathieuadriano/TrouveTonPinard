import { Text, ImageBackground, View, TouchableOpacity, StyleSheet, Image, TextInput, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import MenuButtons from '../components/MenuButtons/MenuButtons';
import { useState } from 'react';
import { palette } from '../theme/Colors';

export default function SettingScreen({navigation}){
    const [gender, setGender] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDay, setBirthDay] = useState('');
    const [birthMonth, setBirthMonth] = useState('');
    const [birthYear, setBirthYear] = useState('');
    const [language, setLanguage] = useState('French');

    const createButtonAlert = () =>
    Alert.alert('Vos préférences ont été correctement enregistré', '', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
      
    const resetForm = () => {
        setGender(null);
        setFirstName('');
        setLastName('');
        setBirthDay('');
        setBirthMonth('');
        setBirthYear('');
        setLanguage('French');
    };

    return(
        <ImageBackground source={require('../../assets/vagues1.png')} style={styles.BgWave}>
            <View style={styles.container}>
                <View style={styles.top}>
                    <TouchableOpacity style={styles.returnArrow} 
                        onPress={() => {
                            resetForm();
                            navigation.goBack();
                        }}
                    >
                        <Image source={require('../../assets/arrow-left.png')} style={styles.arrowIcon} />
                    </TouchableOpacity>
                    <Text style={styles.title}>Paramètres</Text>
                </View>
                
                <View style={styles.card}>
                    <Text style={styles.header}>Détails personnels</Text>
                    <View style={styles.inputGroup}>
                        <Text style={styles.txtTitle}>Civilité*</Text>
                        <View style={styles.radioGroup}>
                            <TouchableOpacity onPress={() => setGender('Monsieur')}>
                                <Text>{gender === 'Monsieur' ? '🔴' : '⚪️'} Monsieur</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setGender('Madame')}>
                                <Text>{gender === 'Madame' ? '🔴' : '⚪️'} Madame</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.txtTitle}>Prénom*</Text>
                        <TextInput
                        style={styles.input}
                        onChangeText={setFirstName}
                        value={firstName}
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.txtTitle}>Nom*</Text>
                        <TextInput
                        style={styles.input}
                        onChangeText={setLastName}
                        value={lastName}
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.txtTitle}>Date de naissance</Text>
                        <View style={styles.dateGroup}>
                            <Picker
                                selectedValue={birthDay}
                                onValueChange={(itemValue) => setBirthDay(itemValue)}
                                itemStyle={{height: 60, width: 120, transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }]}}
                                mode="dropdown">
                                <Picker.Item label="Day" value="" />
                                {[...Array(31)].map((_, index) => (
                                    <Picker.Item key={index} label={`${index + 1}`} value={index + 1} />
                                ))}
                            </Picker>
                            <Picker
                                selectedValue={birthMonth}
                                onValueChange={(itemValue) => setBirthMonth(itemValue)}
                                itemStyle={{height: 60, width: 120, transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }]}}
                                mode="dropdown">
                                <Picker.Item label="Month" value="" />
                                {[...Array(12)].map((_, index) => (
                                    <Picker.Item key={index} label={`${index + 1}`} value={index + 1} />
                                ))}
                            </Picker>

                            <Picker
                                selectedValue={birthYear}
                                itemStyle={{height: 60, width: 120, transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }]}}
                                onValueChange={(itemValue) => setBirthYear(itemValue)}
                                mode="dropdown">
                                <Picker.Item label="Year" value="" />
                                {[...Array(101)].map((_, index) => {
                                    const year = new Date().getFullYear() - index;
                                    return <Picker.Item key={index} label={`${year}`} value={year} />;
                                })}
                            </Picker>
                        </View>
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.txtTitle}>Langue de communication</Text>
                        <Picker
                        selectedValue={language}
                        itemStyle={{height: 60, transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }]}}
                        onValueChange={(itemValue, itemIndex) => setLanguage(itemValue)}>
                            <Picker.Item label="Français" value="French" />
                            <Picker.Item label="Anglais" value="English" />
                            <Picker.Item label="Espagnol" value="Spanish" />
                        </Picker>
                    </View>
                </View>

                <TouchableOpacity onPress={createButtonAlert} style={styles.btnSave}>
                    <Text style={styles.btnTxtSave}>ENREGISTRER</Text>
                </TouchableOpacity>

                <View style={styles.menu}>
                    <MenuButtons navigation={navigation}/>
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
    returnArrow: {
        width: '25%'
    },
    title: {
        fontSize: 32,
        color: palette.pink,
        fontFamily: 'Alpha',
    },
    card: {
        width: '100%',
        backgroundColor: 'white',
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderRadius: 50,
        shadowOpacity: 0.25,
        shadowRadius: 5,
        shadowColor: 'black',
        shadowOffset: { height: 0, width: 0 },
      },
      header: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        letterSpacing: 1.2,
        paddingVertical: 10
      },
      txtTitle: {
        fontSize: 14,
        fontWeight: '600',
      },
      inputGroup: {
        paddingVertical: 10
      },
      radioGroup: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 10,
        paddingTop: 5
      },
      input: {
        padding: 5,
        borderRadius: 2,
        backgroundColor: '#f1f0ec'
      },
      dateGroup: {
        flexDirection: 'row',
        justifyContent: 'space-around',
      },

    btnSave: {
        backgroundColor: palette.pink,
        padding: 12,
        paddingHorizontal: 20,
        borderRadius: 5
    },
    btnTxtSave: {
        color: palette.whiteText,
        fontSize: 14,
        fontWeight: '800',
        letterSpacing: 1.25
    },
    menu: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
})