import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  ImageBackground,
  Button as BB,
  TouchableWithoutFeedback,
} from 'react-native';

import {connect} from 'react-redux';

import {openMenu, closeMenu} from '../store/actions/subRedcuerActions';

import {Menu, Divider} from 'react-native-paper';

import Dropdown from '../components/Dropdown';

const Statistic = ({menuFlag, closeMenu}) => {
  return (
    <>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
        }}>
        <View style={styles.container}>
          <View style={styles.upper}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.heading}>Statistic</Text>

              <View style={{}}>
                <Menu
                  visible={menuFlag}
                  onDismiss={() => closeMenu(false)}
                  anchor={<Dropdown />}>
                  <Menu.Item onPress={() => {}} title="Item 1" />
                  <Menu.Item onPress={() => {}} title="Item 2" />
                  <Menu.Item onPress={() => {}} title="Item 2" />
                  <Divider />
                  <Menu.Item onPress={() => {}} title="Item 3" />
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
          </View>
        </View>
      </ScrollView>
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
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    closeMenu: (value) => dispatch(closeMenu(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Statistic);
