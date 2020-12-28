import React from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = () => {
  return (
    <>
      <View style={styles.header}>
        <View>
          <MaterialCommunityIcons
            name="filter-variant"
            color={'#ffff'}
            size={26}
          />
        </View>
        <View>
          <MaterialCommunityIcons name="bell" color={'#ffff'} size={26} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: '#fff',
  },
  header: {
    // flex: 1,
    height: 60,
    backgroundColor: '#5a17b0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  lower: {
    // flex: 2,
    // backgroundColor: '#fff',
    // padding: 20,
  },
  heading: {
    fontSize: 25,
    fontWeight: '700',
    color: '#ffff',
  },
});

export default Header;
