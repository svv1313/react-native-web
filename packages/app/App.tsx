import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StorybookUIRoot from './storybook';

import {Button} from 'common/Button'

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <StorybookUIRoot />
    // <View style={styles.sectionContainer}>
    //   <Text style={styles.centeredText}>Welcome to RN</Text>
    //   <Button outline={true} onPress={() => setCounter(prev => --prev)}>-</Button>
    //   <Text style={styles.centeredText}>{counter}</Text>
    //   <Button isBig={true} onPress={() => setCounter(prev => ++prev)}>+</Button>
    // </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    padding: 15,
  },

  centeredText: {
    textAlign: 'center',
  }
});

export default App;
