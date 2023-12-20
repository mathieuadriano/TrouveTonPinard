import React, {useState, useEffect} from "react";

import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { palette } from "../../theme/Colors";

export default function WeeklyWine() {
    
  const [weekly, setWeeklyWine] = useState({});

  const urlWeeklyWine = "http://127.0.0.1:8000/api/wine/get-weekly-wines/"
  const fetchProduct = () => {
    fetch(urlWeeklyWine)
      .then((response) => response.json())
      .then((data) =>
        setWeeklyWine({data})
      );
  };

  useEffect(() => {
    fetchProduct();
  }, []);
    return (
        <View style={styles.WeeklyWineMain}>
            <Text style={styles.WeeklyWineTitle}>Le Vin de la semaine</Text>
            <View style={styles.WeeklyWineContent}>
                <Image 
                    style={styles.WeeklyWineImg}
                    source={{uri: `http://127.0.0.1:8000/${weekly.image}`}}
                />
                <View style={styles.WeeklyWineDesc}>
                    <View style={styles.WeeklyWineDescText}>
                        <View style={styles.WeeklyWineDescContent}>
                            <Text style={styles.WeeklyWineName}>
                                {weekly.name}
                            </Text>
                            <Text style={styles.WeeklyWineDomains}>
                                {weekly.winery.name}
                            </Text>
                        </View>
                        
                        <Text style={styles.WeeklyWinePrice}>
                            {weekly.price}
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

        fontFamily: "Will",
        fontSize: "14px",
        letterSpacing: "1px",
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
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        gap: "10px"
    },
    WeeklyWineDescContent: {

    },
    WeeklyWineName:{
        fontFamily: "Alpha",
        fontSize: "14px",
        color: palette.pink
    },
    WeeklyWineDomains: {
        fontFamily: "Alpha",
        fontSize: "12px",
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