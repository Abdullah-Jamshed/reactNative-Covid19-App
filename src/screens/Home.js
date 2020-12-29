import React from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import {Paragraph as RPParagraph, Text as RPText} from 'react-native-paper';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../components/Header';

const Home = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.upper}>
          <Text style={styles.heading}>Home</Text>
          <View style={styles.subHeadingContainer}>
            <RPParagraph style={styles.subHeading}>
              Are you feeling sick ?
            </RPParagraph>
            <RPText style={styles.subText}>
              if your are feeling sick with any of covid-19 symptoms pleasecall
              or SMS us immediately for help .
            </RPText>
          </View>
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
    flex: 1.6,
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

  subHeadingContainer: {
    paddingTop: 30,
  },
  subHeading: {
    color: '#bfbfbf',
  },
  subText: {
    fontSize: 11,
    paddingTop: 8,
    lineHeight: 18,
    color: '#bfbfbf',
  },
  header: {
    flex: 0.3,
  },
});

export default Home;
