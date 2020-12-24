import React from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';

const Statistic = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.upper}></View>
        <View style={styles.lower}>
          <Text>Statistic</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    backgroundColor: '#5a17b0',
  },
  upper: {
    flex: 1,
    backgroundColor: '#5a17b0',
  },
  lower: {
    flex: 2.5,
    backgroundColor: '#fff',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    padding: 20,
  },
});

export default Statistic;
