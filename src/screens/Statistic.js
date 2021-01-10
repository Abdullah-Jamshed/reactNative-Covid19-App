import React, {useEffect, useState} from 'react';
import {CountUp} from 'use-count-up';

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
import Graph from '../components/Graph';
import Graph2 from '../components/Graph';

import {connect} from 'react-redux';
import {closeMenu, locationSet} from '../store/actions/subRedcuerActions';

import countryListApi from '../api/countryListApi';
import covidApi from '../api/covidApi';

const Statistic = ({menuFlag, closeMenu, locationSetValue, location}) => {
  const [countriesList, setCountriesList] = useState([]);

  const [covidStatics, setCovidStatics] = useState(null);

  const [history, setHistory] = useState(null);

  const fetchCountriesList = async () => {
    const {data} = await countryListApi.get(
      '/all?fields=name;alpha2Code;flag;',
    );
    setCountriesList(data);
  };

  const fetchCovidData = async () => {
    if (location === 'global') {
      try {
        const {data} = await covidApi.get(`/global/`);
        setCovidStatics(data);
      } catch {
        console.log('failed');
      }
    } else {
      try {
        const {data} = await covidApi.get(`/${location.alpha2Code}/`);
        setCovidStatics(data);
      } catch {
        console.log('failed');
      }
    }
  };

  const historyOfCovid = () => {
    covidStatics &&
      setHistory(
        covidStatics.stats.history.slice(covidStatics.stats.history.length - 5),
        covidStatics.stats.history.length,
      );
  };

  const numbersSuffix = (digitsValue) => {
    if (digitsValue >= 1000) {
      const value = digitsValue / 1000;
      const finalValue = value >= 1000 ? value / 1000 : value;
      return Math.round(finalValue);
    } else {
      const value = Math.ceil(digitsValue);
      return value;
    }
  };

  useEffect(() => {
    historyOfCovid();
  }, [covidStatics]);

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  useEffect(() => {
    fetchCountriesList();
  }, []);

  useEffect(() => {
    fetchCovidData();
  }, [location]);

  return (
    <>
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
                  <SafeAreaView style={{flex: 1}}>
                    <FlatList
                      data={countriesList}
                      renderItem={({item}) => (
                        <Menu.Item
                          onPress={() => {
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
                <Text style={styles.boxHeading}>Afftected</Text>
                <Text style={styles.numbers}>
                  {covidStatics ? (
                    <CountUp
                      shouldUseToLocaleString={true}
                      toLocaleStringParams={{
                        locale: '',
                        options: {},
                      }}
                      fallbackSuffix={
                        covidStatics.stats.totalConfirmedCases < 1000
                          ? ''
                          : covidStatics.stats.totalConfirmedCases / 1000 < 1000
                          ? 'K'
                          : 'M'
                      }
                      isCounting={true}
                      start={0}
                      end={numbersSuffix(
                        covidStatics.stats.totalConfirmedCases,
                      )}
                      duration={2.2}
                      autoResetKey={numbersSuffix(
                        covidStatics.stats.totalConfirmedCases,
                      )}
                    />
                  ) : (
                    '0'
                  )}
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
                <Text style={styles.boxHeading}>Death</Text>
                <Text style={styles.numbers}>
                  {covidStatics ? (
                    <CountUp
                      thousandsSeparator=","
                      shouldUseToLocaleString={true}
                      toLocaleStringParams={{
                        locale: '',
                        options: {},
                      }}
                      fallbackSuffix={
                        covidStatics.stats.totalDeaths < 1000
                          ? ''
                          : covidStatics.stats.totalDeaths / 1000 < 1000
                          ? 'K'
                          : 'M'
                      }
                      isCounting={true}
                      start={0}
                      end={numbersSuffix(covidStatics.stats.totalDeaths)}
                      duration={2.2}
                      autoResetKey={numbersSuffix(
                        covidStatics.stats.totalDeaths,
                      )}
                    />
                  ) : (
                    '0'
                  )}
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
                <Text style={styles.boxHeading}>Recovered</Text>
                <Text style={styles.numbers}>
                  {covidStatics ? (
                    <CountUp
                      thousandsSeparator=","
                      shouldUseToLocaleString={true}
                      toLocaleStringParams={{
                        locale: '',
                        options: {},
                      }}
                      fallbackSuffix={
                        covidStatics.stats.totalRecoveredCases < 1000
                          ? ''
                          : covidStatics.stats.totalRecoveredCases / 1000 < 1000
                          ? 'K'
                          : 'M'
                      }
                      isCounting={true}
                      start={0}
                      end={numbersSuffix(
                        covidStatics.stats.totalRecoveredCases,
                      )}
                      duration={2.2}
                      autoResetKey={numbersSuffix(
                        covidStatics.stats.totalRecoveredCases,
                      )}
                    />
                  ) : (
                    '0'
                  )}
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
                <Text style={styles.boxHeading}>Active</Text>
                <Text style={styles.numbers}>
                  {covidStatics ? (
                    <CountUp
                      thousandsSeparator=","
                      shouldUseToLocaleString={true}
                      toLocaleStringParams={{
                        locale: '',
                        options: {},
                      }}
                      fallbackSuffix={
                        covidStatics.stats.newlyConfirmedCases < 1000
                          ? ''
                          : covidStatics.stats.newlyConfirmedCases / 1000 < 1000
                          ? 'K'
                          : 'M'
                      }
                      isCounting={true}
                      start={0}
                      end={numbersSuffix(
                        covidStatics.stats.newlyConfirmedCases,
                      )}
                      duration={2.2}
                      autoResetKey={numbersSuffix(
                        covidStatics.stats.totalConfirmedCases,
                      )}
                    />
                  ) : (
                    '0'
                  )}
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
                <Text style={styles.boxHeading}>Serious</Text>
                <Text style={styles.numbers}>
                  {covidStatics ? (
                    <CountUp
                      thousandsSeparator=","
                      shouldUseToLocaleString={true}
                      toLocaleStringParams={{}}
                      fallbackSuffix={
                        Math.ceil(
                          (covidStatics.stats.newlyConfirmedCases * 10) / 100,
                        ) < 1000
                          ? ''
                          : covidStatics.stats.newlyConfirmedCases / 1000 < 1000
                          ? 'K'
                          : 'M'
                      }
                      isCounting={true}
                      start={0}
                      end={numbersSuffix(
                        Math.ceil(
                          (covidStatics.stats.newlyConfirmedCases * 10) / 100,
                        ),
                      )}
                      duration={2.2}
                      autoResetKey={numbersSuffix(
                        Math.ceil(
                          (covidStatics.stats.newlyConfirmedCases * 10) / 100,
                        ),
                      )}
                    />
                  ) : (
                    '0'
                  )}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.lower}>
          <ScrollView
            contentContainerStyle={{
              padding: 20,
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
            }}>
            <View style={{}}>
              <Graph history={history} />
            </View>
          </ScrollView>
        </View>
      </View>
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
    flex: 1,
    backgroundColor: '#fff',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    paddingTop: 10,
  },
  heading: {
    fontSize: 25,
    fontWeight: '700',
    color: '#ffff',
  },
  statsContainer: {
    marginTop: 20,
  },
  numbers: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
  },
  boxHeading: {
    color: '#fff',
    fontWeight: '700',
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
