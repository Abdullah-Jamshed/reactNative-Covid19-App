import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  ImageBackground,
  Button as BB,
  TouchableWithoutFeedback,
} from 'react-native';

import {Button, Menu, Divider, Provider} from 'react-native-paper';

import Header from '../components/Header';
import Dropdown from '../components/Dropdown';

const Statistic = () => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => {
    console.log(':open Menu');
    setVisible(true);
  };

  const closeMenu = () => setVisible(false);

  const AA = () => {
    return (
      <TouchableWithoutFeedback
        onPress={openMenu}
        style={{
          // borderRadius: 20,
          // backgroundColor: '#fff',
          // flexDirection: 'row',
          // paddingVertical: 5,
          // paddingHorizontal: 8,
          // alignItems: 'center',
        }}>
        <View
          style={{
            borderRadius: 20,
            backgroundColor: '#fff',
            flexDirection: 'row',
            paddingVertical: 5,
            paddingHorizontal: 8,
            alignItems: 'center',
          }}>
          <View
            style={{
              paddingVertical: 3,
              paddingHorizontal: 8,
              borderRadius: 100,
              backgroundColor: '#5a17b0',
            }}>
            <ImageBackground
              source={{
                uri: 'https://www.countryflags.io/pk/shiny/24.png',
              }}
              style={{
                width: 24,
                height: 24,
              }}
            />
          </View>
          <View style={{marginHorizontal: 10}}>
            <Text style={{fontWeight: '700'}}>PK</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.upper}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.heading}>Statistic</Text>

              {/* <View
                style={{
                  borderRadius: 20,
                  backgroundColor: '#fff',
                  flexDirection: 'row',
                  paddingVertical: 5,
                  paddingHorizontal: 8,
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    paddingVertical: 3,
                    paddingHorizontal: 8,
                    borderRadius: 100,
                    backgroundColor: '#5a17b0',
                  }}>
                  <ImageBackground
                    source={{
                      uri: 'https://www.countryflags.io/pk/shiny/24.png',
                    }}
                    style={{
                      width: 24,
                      height: 24,
                    }}
                  />
                </View> 
                <View style={{marginHorizontal: 10}}>
                  <Text style={{fontWeight: '700'}}>PK</Text>
                </View>*/}

              <View style={{}}>
                <Menu
                  visible={visible}
                  onDismiss={closeMenu}
                  // anchor={<A onPress={openMenu} />}>
                  anchor={<AA />}>
                  <Menu.Item onPress={() => {}} title="Item 1" />
                  <Menu.Item onPress={() => {}} title="Item 2" />
                  <Menu.Item onPress={() => {}} title="Item 2" />
                  <Divider />
                  <Menu.Item onPress={() => {}} title="Item 3" />
                </Menu>
              </View>

              {/* </View> */}
            </View>

            <View style={styles.statsContainer}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    height: 100,
                    width: '48%',
                    backgroundColor: '#f2b50c',
                    justifyContent: 'space-between',
                    padding: 10,
                    borderRadius: 20,
                  }}>
                  <Text style={{color: '#fff', fontWeight: '700'}}>
                    Afftected
                  </Text>
                  <Text
                    style={{fontSize: 16, fontWeight: '700', color: '#fff'}}>
                    99,00000
                  </Text>
                </View>
                <View
                  style={{
                    height: 100,
                    width: '48%',
                    backgroundColor: '#ff5821',
                    justifyContent: 'space-between',
                    padding: 10,
                    borderRadius: 20,
                  }}>
                  <Text style={{color: '#fff', fontWeight: '700'}}>Death</Text>
                  <Text
                    style={{fontSize: 16, fontWeight: '700', color: '#fff'}}>
                    99,00000
                  </Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: 10,
                }}>
                <View
                  style={{
                    height: 100,
                    width: '31%',
                    backgroundColor: '#2db554',
                    justifyContent: 'space-between',
                    padding: 10,
                    borderRadius: 20,
                  }}>
                  <Text style={{color: '#fff', fontWeight: '700'}}>Death</Text>
                  <Text
                    style={{fontSize: 16, fontWeight: '700', color: '#fff'}}>
                    99,00000
                  </Text>
                </View>
                <View
                  style={{
                    height: 100,
                    width: '31%',
                    backgroundColor: '#2da5b5',
                    justifyContent: 'space-between',
                    padding: 10,
                    borderRadius: 20,
                  }}>
                  <Text style={{color: '#fff', fontWeight: '700'}}>Death</Text>
                  <Text
                    style={{fontSize: 16, fontWeight: '700', color: '#fff'}}>
                    99,00000
                  </Text>
                </View>
                <View
                  style={{
                    height: 100,
                    width: '31%',
                    backgroundColor: '#8750ba',
                    justifyContent: 'space-between',
                    padding: 10,
                    borderRadius: 20,
                  }}>
                  <Text style={{color: '#fff', fontWeight: '700'}}>Death</Text>
                  <Text
                    style={{fontSize: 16, fontWeight: '700', color: '#fff'}}>
                    99,00000
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.lower}>
            <Text>Statistic</Text>
            <Image
              source={{uri: 'https://www.countryflags.io/pk/shiny/64.png'}}
              style={{width: 60, height: 60}}
            />

            {/* <Text>Statistic</Text> */}
            {/* <View
                style={{
                  paddingTop: 50,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <Menu
                  visible={visible}
                  onDismiss={closeMenu}
                  anchor={<Text onPress={openMenu}>PK</Text>}>
                  <Menu.Item onPress={() => {}} title="Item 1" />
                  <Menu.Item onPress={() => {}} title="Item 2" />
                  <Divider />
                  <Menu.Item onPress={() => {}} title="Item 3" />
                </Menu>
              </View> */}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 2,
    // backgroundColor: '#fff',
    backgroundColor: '#5a17b0',
  },
  upper: {
    // flex: 1,
    backgroundColor: '#5a17b0',
    paddingHorizontal: 20,
  },
  lower: {
    // height: "100%",
    backgroundColor: '#fff',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    padding: 20,
  },
  heading: {
    fontSize: 25,
    fontWeight: '700',
    color: '#ffff',
  },
  statsContainer: {
    marginTop: 20,
  },
});

export default Statistic;
