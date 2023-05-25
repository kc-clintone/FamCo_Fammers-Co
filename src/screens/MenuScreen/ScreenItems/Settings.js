import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { TouchableRipple, Switch, useTheme } from "react-native-paper"

export default function Settings() {
  // theme
  const paperTheme = useTheme()
  return (
    <View style={{ width: "95%", alignSelf: "center", marginTop: 10 }}>
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={styles.settingsItem}>Theme and appearance</Text>
              <Text style={styles.description}>Set the app theme to your preferrence.</Text>
            </View>
            <TouchableRipple onPress={{}}>
              <Switch value={paperTheme.dark} />
            </TouchableRipple>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.settingsItem}>Push notifications</Text>
          <Text style={styles.description}>Enable push notifications to get updates</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.settingsItem}>Terms, conditions and privacy</Text>
          <Text style={styles.description}>Learn more about the use of this app</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.settingsItem}>Security</Text>
          <Text style={styles.description}>Set access limits to this app</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.settingsItem}>Languages</Text>
          <Text style={styles.description}>Set your desired language</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.settingsItem}>Clear user data</Text>
          <Text style={styles.description}>Erase your data from this device</Text>
        </View>
      </View>
    </View>
  )
}

// styles
const styles = StyleSheet.create({
  container: {},
  itemContainer: {
    marginTop: 15,
    paddingVertical: 5,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  settingsItem: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    color: "grey",
    fontSize: 15,
    fontWeight: "300",
  },
})
