import React from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import Header from './src/components/Header';

import Navigator from './src/configs/Navigator';

import Dropdown from "./src/components/Dropdown"

import {Provider} from 'react-native-paper';

const App = () => {
  return (
    <>
      <Provider>
        <View style={styles.container}>
          <Header />
          <Navigator />
        </View>
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
