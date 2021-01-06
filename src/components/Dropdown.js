import React, {useEffect} from 'react';
import {SvgUri} from 'react-native-svg';

import {
  TouchableWithoutFeedback,
  View,
  ImageBackground,
  Text,
  Image,
} from 'react-native';

import {connect} from 'react-redux';
import {openMenu} from '../store/actions/subRedcuerActions';

const Dropdown = ({openMenu, location, flagName}) => {
  return (
    <TouchableWithoutFeedback onPress={() => openMenu(true)} style={{}}>
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
            padding: 3,
            borderRadius: 100,
          }}>
          {location === 'global' ? (
            <Image
              source={{
                uri: `https://www.clipartmax.com/png/middle/271-2718179_global-icon-page-international-air-transport-association.png`,
              }}
              style={{width: 25, height: 25, borderRadius: 100}}
            />
          ) : (
            <Image
              source={{
                uri: `https://assets.thebasetrip.com/api/v2/countries/flags/${flagName}.png`,
              }}
              style={{width: 25, height: 25, borderRadius: 100}}
            />
          )}
        </View>
        <View style={{marginHorizontal: 10}}>
          {location === 'global' ? (
            <Text style={{fontWeight: '700'}}>GB</Text>
          ) : (
            <Text style={{fontWeight: '700'}}>{location.alpha2Code}</Text>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const mapStateToProps = (state) => {
  return {
    location: state.subReducer.location,
    flagName: state.subReducer.flagName,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    openMenu: (value) => dispatch(openMenu(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
