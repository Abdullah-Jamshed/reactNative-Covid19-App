import React from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import Header from './src/components/Header';

import Navigator from './src/configs/Navigator';

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <Header style={styles.upper} />
        <Navigator style={styles.lower} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upper: {
    flex: 1,
  },
  lower: {
    // backgroundColor: '#fff',
    // marginTop: -20,
    // borderTopRightRadius: 20,
    // borderTopLeftRadius: 20,
  },
});

export default App;
