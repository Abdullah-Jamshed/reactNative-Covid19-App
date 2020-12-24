import React from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';

import Navigator from './src/configs/Navigator';

const App = () => {
  return (
    <>
      <View style={styles.container}>
        {/* <Text>sdfsdf</Text> */}
        <Navigator />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  upper: {
    flex: 1,
    backgroundColor: '#8456bf',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  lower: {
    flex: 2,
    backgroundColor: '#fff',
    // marginTop: -20,
    // borderTopRightRadius: 20,
    // borderTopLeftRadius: 20,
  },
});

export default App;
