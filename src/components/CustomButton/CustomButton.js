import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

const CustomButton = ({ onPress, text, type = 'PRIMARY', bgColor, fgColor }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? { backgroundColor: bgColor } : {},
      ]}
    >
      <Text style={[styles.text, styles[`text_${type}`], fgColor ? { color: fgColor } : {}]}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',

    padding: 15,
    marginVertical: 5,

    alignItems: 'center',
    borderRadius: 5,
  },

  container_PRIMARY: {
    backgroundColor: '#041e5a',
  },

  container_SECONDARY: {
    borderColor: '#3B71F3',
    borderWidth: 2,
  },

  container_TERTIARY: {
    borderColor: '#051F20',
    borderWidth: 2,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },

  text_SECONDARY: {
    color: '#3B71F3',
  },

  text_TERTIARY: {
    color: 'gray',
  },
})

export default CustomButton
