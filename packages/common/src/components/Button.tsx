import React from "react";
import { TouchableHighlight, Text, StyleSheet } from "react-native";

export const Button = ({ onPress = () => {}, children = '', outline = false, isBig = false }) => {
  const containerStyles = [styles.container, outline && styles.containerOutlined, isBig && styles.bigContainer];
  const textStyles = [styles.text, outline && styles.textOutlined, isBig && styles.bigText];

  return (
    <TouchableHighlight onPress={onPress} style={containerStyles}>
      <Text style={textStyles}>{children}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    backgroundColor: '#f00',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 50
  },

  containerOutlined: {
    borderWidth: 2,
    borderColor: '#000',
  },

  bigContainer: {
    width: 150,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },

  text: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },

  textOutlined: {
    fontWeight: 'bold',
  },

  bigText: {
    fontSize: 25,
  },
});
