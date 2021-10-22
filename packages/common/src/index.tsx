import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.centeredText}>Welcome to RN</Text>
      <Button title="decrement" onPress={() => setCounter(prev => --prev)}>-</Button>
      <Text style={styles.centeredText}>{counter}</Text>
      <Button title="increment" onPress={() => setCounter(prev => ++prev)}>+</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 15,
  },

  centeredText: {
    textAlign: 'center',
  }
});
