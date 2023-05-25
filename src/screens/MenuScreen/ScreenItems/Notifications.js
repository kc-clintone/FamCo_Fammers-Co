import { View, Text } from "react-native";
import React from "react";

export default function Notifications() {
  return (
    <View
        style={
            {
                width: '95%',
                alignSelf: 'center',
                marginTop: 10
            }
        }
    >
        <Text
            style={
                {fontSize: 18,
                fontWeight: '100'
                }
            }
        >
            You have no notifications yet, all available notifications will appear bellow
        </Text>
    </View>
  );
}
