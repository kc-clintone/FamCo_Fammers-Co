import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Feedback() {
  return (
    <View style={styles.root}>
      <Text>Feel free to give us feedback via any of the following platfirms, your concern matters!</Text>

      <View style={styles.platforms}>
        <TouchableOpacity style={styles.platform}>
            <MaterialCommunityIcons color='blue' name='facebook' style={styles.platformIcon}/>
            <Text style={styles.platformName}>facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.platform}>
            <MaterialCommunityIcons color='green' name='whatsapp' style={styles.platformIcon}/>
            <Text style={styles.platformName}>whatsapp</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.platform}>
            <MaterialCommunityIcons color='red' name='instagram' style={styles.platformIcon}/>
            <Text style={styles.platformName}>instagram</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.platform}>
            <MaterialCommunityIcons color='yellow' name='mail' style={styles.platformIcon}/>
            <Text style={styles.platformName}>email</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.platform}>
            <MaterialCommunityIcons color='lightblue' name='twitter' style={styles.platformIcon}/>
            <Text style={styles.platformName}>twitter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    root:{
        width: '96%',
        flex: 1,
        marginTop: 10,
        alignSelf: 'center'
    },
    platforms:{
        marginVertical: 10
    },
    platform:{
        borderRadius: 8,
        backgroundColor: '#051F20',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 5,
        marginVertical: 10
    },
    platformIcon:{
        fontSize: 35,
        marginRight: 10,
    },
    platformName:{
        fontSize: 18,
        fontWeight: '500',
        color: '#fff'
    }
})
