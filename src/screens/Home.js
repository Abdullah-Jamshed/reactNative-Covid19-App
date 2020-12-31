import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

import {Paragraph as RPParagraph, Text as RPText} from 'react-native-paper';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonCall}>
              <Ionicons name="call" color="#fff" size={15} />
              <Text style={styles.buttonText}>Call</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonSMS}>
              <Ionicons name="chatbubble" color="#fff" size={15} />
              <Text style={styles.buttonText}>SMS</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView>
          <View style={styles.lower}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingTop: 20,
              }}>
              <View style={{alignItems: 'center', width: 80}}>
                <Image
                  source={require('../assests/a.png')}
                  style={{width: 70, height: 70}}
                />
                <Text
                  style={{
                    fontSize: 12,
                    textAlign: 'center',
                    fontWeight: '700',
                  }}>
                  Avoid Close Contact
                </Text>
              </View>
              <View style={{alignItems: 'center', width: 80}}>
                <Image
                  source={require('../assests/wash_hand.png')}
                  style={{width: 70, height: 70}}
                />
                <Text style={styles.font}>Clean your Hands Often</Text>
              </View>
              <View style={{alignItems: 'center', width: 80}}>
                <Image
                  source={require('../assests/medical_mask.png')}
                  style={{width: 70, height: 70}}
                />
                <Text style={styles.font}>Follow Dr Instructions</Text>
              </View>
            </View>

            <View style={styles.testContainer}>
              <View style={{flexShrink: 0}}>
                <Image
                  source={require('../assests/healthcare.png')}
                  style={styles.testImage}
                />
              </View>
              <View style={{flexShrink: 1}}>
                <View style={{marginLeft: 10}}>
                  <RPParagraph style={{fontSize: 16, fontWeight: '700',color:"#ffff"}}>
                    Do your own test !
                  </RPParagraph>
                  <Text style={{color:"#bfbfbf"}}>
                    Follow the instructions to do your own test.
                    Follow the instructions to do your own test.
                    Follow the instructions to do your own test.
                    Follow the instructions to do your own test.
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
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
    // flex: 5,
    backgroundColor: '#5a17b0',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingHorizontal: 20,
  },
  lower: {
    // flex: 1,
    // backgroundColor: '#dfdf',
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 10,
  },
  buttonCall: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#bf2222',
    padding: 10,
    width: 100,
    borderRadius: 20,
    alignItems: 'center',
    margin: 10,
  },
  buttonSMS: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#078ab5',
    padding: 10,
    width: 100,
    borderRadius: 20,
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    color: '#fff',
    marginLeft: 5,
  },
  font: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '700',
  },
  testContainer: {
    flexDirection: 'row',
    // flexWrap:"wrap",
    backgroundColor: '#5a17b0',
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 20,
    borderRadius:10,
  },
  testImage: {
    width: 70,
    height: 70,
  },
});

export default Home;
