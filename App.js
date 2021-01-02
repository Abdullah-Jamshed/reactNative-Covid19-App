import React from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import Header from './src/components/Header';

import Navigator from './src/configs/Navigator';

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <Header />
        <Navigator />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
