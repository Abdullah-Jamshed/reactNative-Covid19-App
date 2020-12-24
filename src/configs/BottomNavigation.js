import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {StyleSheet} from 'react-native';

// Icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//  Screens
import Home from '../screens/Home';
import Statistic from '../screens/Statistic';

const Tab = createMaterialBottomTabNavigator();

const BottomNavigation = ({navigation}) => {
  console.log('navigation ===>>>', navigation);
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#3e2465"
      inactiveColor="#bdbdbd"
      labeled={false}
      barStyle={{backgroundColor: '#fff', paddingBottom: 5}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="home-variant"
              color={color}
              size={26}
            />
          ),
          tabBarColor: 'red',
        }}
      />

      <Tab.Screen
        name="Statistic"
        component={Statistic}
        options={{
          tabBarLabel: 'Statistic',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="chart-bar"
              color={color}
              size={26}
              //   style={}
            />
          ),
          tabBarColor: 'red',
        }}
        onPress={() => console.log('navigation ===>>>')}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  upper: {
    flex: 1,
    backgroundColor: '#8456bf',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  lower: {
    flex: 2,
    backgroundColor: '#fff',
    // marginTop: -20,
    // borderTopRightRadius: 20,
    // borderTopLeftRadius: 20,
  },
  activeTab: {
    backgroundColor: 'red',
    width: 50,
    height: 30,
    textAlign: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default BottomNavigation;
