import React from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import Header from '../components/Header';

const Statistic = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Header />
        </View>
        <View style={styles.upper}>
          <Text style={styles.heading}>Statistic</Text>
          <Text style={styles.heading}>Statistic</Text>
          <Text style={styles.heading}>Statistic</Text>
          <Text style={styles.heading}>Statistic</Text>
        </View>
        <View style={styles.lower}>
          <Text>Statistic</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    // backgroundColor: '#fff',
    backgroundColor: '#5a17b0',
  },
  upper: {
    flex: 1,
    backgroundColor: '#5a17b0',
    paddingHorizontal: 20,
  },
  lower: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    padding: 20,
  },
  header: {
    flex: 0.3,
  },
  heading: {
    fontSize: 25,
    fontWeight: '700',
    color: '#ffff',
  },
});

export default Statistic;
