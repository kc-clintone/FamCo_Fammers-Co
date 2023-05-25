import { View, Text, StyleSheet, Alert, TouchableOpacity, Image } from "react-native"
import React from "react"
import CustomButton from "../../components/CustomButton"
import { Auth } from "aws-amplify"
import { EvilIcons, Ionicons, MaterialIcons } from "@expo/vector-icons"
import { useUserAuthContext } from "../../../contexts/UserAuthContext"
import { useNavigation } from "@react-navigation/native"

export default function MenuScreen() {
  // navigation
  const navigation = useNavigation()
  // contexts
  const { user } = useUserAuthContext()
  // signed in user
  const signedUser = user?.attributes
  // signout
  const signOut = () => {
    Auth.signOut()
  }

  const onSignOut = async () => {
    Alert.alert(
      "Warning",
      "Younwill be loged out of this application and you may lose your data, do you still wish to continue?",
      [
        {
          text: "Yes",
          onPress: () => signOut(),
        },
        {
          text: "No",
        },
      ]
    )
  }

  return (
    <View style={styles.root}>
      {/* profile */}
      <View style={styles.profile}>
        {!signedUser ? (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <Ionicons
              name='warning'
              size={45}
              color='grey'
            />
            <Text
              style={{
                fontSize: 18,
                fontWeight: "400",
                color: "black",
                textAlign: "center",
              }}
            >
              Please sign in to see your profile...
            </Text>
          </View>
        ) : (
          <View style={{ flexDirection: "row" }}>
            <View style={{ alignItems: "center", marginTop: 10 }}>
              <View style={styles.profileImageContainer}>
                <Image
                  source={require("../../../assets/images/user.png")}
                  alt={"user image"}
                  style={styles.userImage}
                />
              </View>
              <Text style={{ fontSize: 18, color: "black" }}>{signedUser?.preferred_username}</Text>
            </View>
            <View
              style={{
                justifyContent: "center",
                marginLeft: 30,
                paddingLeft: 10,
                borderLeftColor: "black",
                borderLeftWidth: 0.7,
              }}
            >
              <Text style={{ fontWeight: "800", fontSize: 28, color: "black" }}>
                {signedUser?.name}
              </Text>
              <Text style={{ color: "grey" }}>{signedUser?.email}</Text>
            </View>
          </View>
        )}
      </View>

      {/* menu items */}
      <View style={styles.menuItems}>
        <TouchableOpacity onPress={() => navigation.navigate("Root", { screen: "Settings" })}>
          <View style={styles.menuItemLink}>
            <View style={styles.left}>
              <MaterialIcons
                name='settings'
                size={30}
                color='black'
              />
              <Text style={styles.menuItem}>Setings</Text>
            </View>
            <EvilIcons
              name='chevron-right'
              size={30}
              color='black'
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Root", { screen: "Tools" })}>
          <View style={styles.menuItemLink}>
            <View style={styles.left}>
              <Ionicons
                name='ios-list'
                size={30}
                color='black'
              />
              <Text style={styles.menuItem}>Data collection tools</Text>
            </View>
            <EvilIcons
              name='chevron-right'
              size={30}
              color='black'
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Root", { screen: "Feedback" })}>
          <View style={styles.menuItemLink}>
            <View style={styles.left}>
              <MaterialIcons
                name='chat'
                size={30}
                color='black'
              />
              <Text style={styles.menuItem}>Feedback</Text>
            </View>
            <EvilIcons
              name='chevron-right'
              size={30}
              color='black'
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Root", { screen: "Notification" })}>
          <View style={styles.menuItemLink}>
            <View style={styles.left}>
              <EvilIcons
                name='bell'
                size={30}
                color='black'
              />
              <Text style={styles.menuItem}>Notifications & support</Text>
            </View>
            <EvilIcons
              name='chevron-right'
              size={30}
              color='black'
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.menuItemLink}>
            <View style={styles.left}>
              <Ionicons
                name='ios-share'
                size={30}
                color='black'
              />
              <Text style={styles.menuItem}>Rate & share</Text>
            </View>
            <EvilIcons
              name='chevron-right'
              size={30}
              color='black'
            />
          </View>
        </TouchableOpacity>
      </View>

      {/* sin=gnout button */}
      <CustomButton
        bgColor={signedUser ? "red" : "#051F20"}
        fgColor='white'
        text={signedUser ? "LogOut" : "SignIn"}
        onPress={signedUser ? onSignOut : () => navigation.navigate("SignIn")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    width: "96%",
    flex: 1,
    alignSelf: "center",
  },
  profile: {
    width: "100%",
    padding: 10,
    marginVertical: 10,
  },
  menuItems: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: "grey",
    marginTop: 10,
    marginBottom: 60,
    paddingVertical: 10,
  },
  menuItem: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  menuItemLink: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
    marginTop: 5,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImageContainer: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 5,
  },
  userImage: {
    width: "100%",
    height: "100%",
  },
})
