import React from 'react';
import {StyleSheet, View} from 'react-native';
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
  header: {
    height: 60,
    backgroundColor: '#5a17b0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});

export default Header;
