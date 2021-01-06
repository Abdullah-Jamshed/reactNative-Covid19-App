import React, {useEffect, useState} from 'react';

import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  View,
  Text,
  Image,
  Button as BB,
  FlatList,
  LogBox,
} from 'react-native';

import {Menu, Divider} from 'react-native-paper';
import Dropdown from '../components/Dropdown';

import {connect} from 'react-redux';
import {closeMenu, locationSet} from '../store/actions/subRedcuerActions';

import countryListApi from '../api/countryListApi';

const Statistic = ({menuFlag, closeMenu, locationSetValue}) => {
  const [countriesList, setCountriesList] = useState([]);

  const fetchCountriesList = async () => {
    const {data} = await countryListApi.get(
      '/all?fields=name;alpha2Code;flag;',
    );
    setCountriesList(data);
  };

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  useEffect(() => {
    fetchCountriesList();
  }, []);

  // useEffect(() => {
  //   countriesList.length !== 0
  //     ? console.log('===>', countriesList[0])
  //     : console.log('dasd');
  // }, [countriesList]);

  return (
    <>
      {/* <ScrollView
        contentContainerStyle={{
          flex: 1,
        }}> */}
      <View style={styles.container}>
        <View style={styles.upper}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.heading}>Statistic</Text>

            <View style={{}}>
              <Menu
                visible={menuFlag}
                onDismiss={() => closeMenu(false)}
                anchor={<Dropdown />}
                style={{width: 200}}>
                <Menu.Item
                  onPress={() => {
                    locationSetValue('global');
                    closeMenu(false);
                  }}
                  title="Global"
                />

                {countriesList !== 0 && (
                  // countriesList.map((item) => {
                  // return <Menu.Item key={item.} onPress={() => {}} title={item.name} />;
                  //})
                  <SafeAreaView style={{flex: 1}}>
                    <FlatList
                      data={countriesList}
                      renderItem={({item}) => (
                        <Menu.Item
                          onPress={() => {
                            console.log(item);
                            locationSetValue(item);
                            closeMenu(false);
                          }}
                          title={item.name}
                        />
                      )}
                      keyExtractor={(item) => item.alpha2Code}
                    />
                  </SafeAreaView>
                )}

                {/* <Divider />
                  <Menu.Item onPress={() => {}} title="Item 3" /> */}
              </Menu>
            </View>
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
                <Text style={{fontSize: 16, fontWeight: '700', color: '#fff'}}>
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
                <Text style={{fontSize: 16, fontWeight: '700', color: '#fff'}}>
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
                <Text style={{fontSize: 16, fontWeight: '700', color: '#fff'}}>
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
                <Text style={{fontSize: 16, fontWeight: '700', color: '#fff'}}>
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
                <Text style={{fontSize: 16, fontWeight: '700', color: '#fff'}}>
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
        </View>
      </View>
      {/* </ScrollView> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5a17b0',
  },
  upper: {
    backgroundColor: '#5a17b0',
    paddingHorizontal: 20,
  },
  lower: {
    height: '100%',
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

const mapStateToProps = (state) => {
  return {
    menuFlag: state.subReducer.menuFlag,
    location: state.subReducer.location,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    closeMenu: (value) => dispatch(closeMenu(value)),
    locationSetValue: (value) => dispatch(locationSet(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Statistic);
