import React from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../components/Header';

const Home = () => {
  return (
    <>
      <View style={styles.container}>
        {/* <View style={styles.header}>
          <Header />
        </View> */}
        <View style={styles.upper}>
          <Text style={styles.heading}>Home</Text>
        </View>
        <View style={styles.lower}>
          {/* <MaterialCommunityIcons name="home-variant" color={"red"} size={15} /> */}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  upper: {
    flex: 1,
    // backgroundColor: '#8456bf',
    backgroundColor: '#5a17b0',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingHorizontal: 20,
  },
  lower: {
    flex: 2,
    backgroundColor: '#fff',
    padding: 20,
  },
  heading: {
    fontSize: 25,
    fontWeight: '700',
    color: '#ffff',
  },
  header: {
    flex: 0.3,
  },
});

export default Home;
