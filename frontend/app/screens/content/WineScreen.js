import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { palette } from "../../theme/Colors";

export default function WineScreen ({ route }) {
    const { wine } = route.params;
    console.log(wine)
    return (
        <View style={styles.container}>
            <View style={styles.card}>
              <View style={styles.top}>
                <Text style={styles.title}>{wine.name}</Text>
                <View>
                  <Text style={styles.price}>{wine.prix}</Text>
                  {/* ADD CART ICON HERE*/}
                </View>
                <TouchableOpacity>
                  {/* ADD PROCUCER ICON HERE*/}
                  <Text style={styles.producerInfo}>Info producteur</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.bottom}>
                <View style={styles.bottom_top}>
                  <View>
                    <Text style={styles.details_title}>Alc.</Text>
                    <Text style={styles.details_content}>{wine.alcool_degree}°</Text>
                  </View>
                  <View>
                    <Text style={styles.details_title}>Vol.</Text>
                    <Text style={styles.details_content}>{wine.volume}</Text>  
                  </View> 
                  <Image source={{ uri: `http://10.34.0.109:8001/${wine.image}` }} style={styles.image} />
                </View>
                <View style={styles.bottom_info}>
                  <Text style={styles.details_title}>Année</Text>
                  <Text style={styles.details_content}>{wine.creation_year}</Text>
                </View>
                <View style={styles.bottom_info}>
                  <Text style={styles.details_title}>Domaine</Text>
                  <Text style={styles.details_content}>{wine.winery.name}</Text>
                </View>
                <View style={styles.bottom_info}>
                  <Text style={styles.details_title}>Description du produit</Text>
                  <Text style={styles.details_content}>Loremipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>COMMANDER</Text>
              </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  card: {
    borderRadius: 8,
    padding: 16,
    backgroundColor: '#f9f9f9',
    height: '100%'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: 'blue',
  },
  image: {
    width: '100%',
    height: 300,
  },
  details_title: {
    color: palette.black,
    fontFamily: 'Alpha',
  },
  details_content: {
    color: palette.grey,
    fontFamily: 'Alpha',
  },
  button: {
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Alpha',
  },
});