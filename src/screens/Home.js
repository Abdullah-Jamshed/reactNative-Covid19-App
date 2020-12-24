import React from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const Home = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.upper}></View>
        <View style={styles.lower}>
          <Text>Home</Text>
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
  },
  lower: {
    flex: 2,
    backgroundColor: '#fff',
    padding: 20,
    // marginTop: -20,
    // borderTopRightRadius: 20,
    // borderTopLeftRadius: 20,
  },
});

export default Home;
