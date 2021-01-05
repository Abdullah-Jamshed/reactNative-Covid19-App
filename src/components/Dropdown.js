import * as React from 'react';
import {TouchableWithoutFeedback, View,ImageBackground,Text} from 'react-native';
import {Button, Menu, Divider, Provider} from 'react-native-paper';

const Dropdown = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <TouchableWithoutFeedback
      onPress={openMenu}
      style={
        {
          // borderRadius: 20,
          // backgroundColor: '#fff',
          // flexDirection: 'row',
          // paddingVertical: 5,
          // paddingHorizontal: 8,
          // alignItems: 'center',
        }
      }>
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

export default Dropdown;
