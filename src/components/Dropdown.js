import React, {useEffect} from 'react';

import {
  TouchableWithoutFeedback,
  View,
  ImageBackground,
  Text,
} from 'react-native';

import {connect} from 'react-redux';
import {openMenu} from '../store/actions/subRedcuerActions';

const Dropdown = ({openMenu, location}) => {

  useEffect(() => {
    console.log("==>",location);
  }, [location]);

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
            paddingVertical: 3,
            paddingHorizontal: 8,
            borderRadius: 100,
            backgroundColor: '#5a17b0',
          }}>
          {location === 'global' ? (
            <ImageBackground
              source={{
                uri: 'https://www.countryflags.io/au/shiny/24.png',
              }}
              style={{
                width: 24,
                height: 24,
              }}
            />
          ) : (
            <ImageBackground
              source={{
                uri: `https://www.countryflags.io/pk/shiny/24.png`,
              }}
              style={{
                width: 24,
                height: 24,
              }}
            />
          )}
        </View>
        <View style={{marginHorizontal: 10}}>
          <Text style={{fontWeight: '700'}}>PK</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const mapStateToProps = (state) => {
  return {
    location: state.subReducer.location,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    openMenu: (value) => dispatch(openMenu(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
