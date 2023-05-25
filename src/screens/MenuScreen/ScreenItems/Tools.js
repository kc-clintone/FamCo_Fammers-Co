import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Tools() {
  return (
    <View style={styles.root}> 
      <View style={{}}>
        <Text>Did you know you can use tools like "kobo collect" to collect data, analyse data and do so much more just on your phone?, well, here's a list of tools you can use.</Text>

        <View style={styles.tools}>
            <Text style={styles.tool}>Kobo collect</Text>
            <Text style={styles.tool}>RedCap</Text>
            <Text style={styles.tool}>Google sheets</Text>
            <Text style={styles.tool}>ODK</Text>
            <Text style={styles.tool}>See more</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    root:{
        width: '95%',
        alignSelf: 'center',
        marginTop: 5,
        flex: 1
    },
    tools:{
        marginTop: 15,
    },
    tool:{
        fontSize: 20,
        fontWeight: '500',
        backgroundColor: '#B4B4C6',
        borderRadius: 8,
        elevation: 8,
        color: 'black',
        paddingVertical: 15,
        paddingHorizontal: 8,
        marginBottom: 15
    }
})
