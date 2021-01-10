import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

// Icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//  Screens
import Home from '../screens/Home';
import Statistic from '../screens/Statistic';

const Tab = createMaterialBottomTabNavigator();

const BottomNavigation = () => {
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
            <MaterialCommunityIcons name="chart-bar" color={color} size={26} />
          ),
          tabBarColor: 'red',
        }}
        onPress={() => console.log('navigation ===>>>')}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
