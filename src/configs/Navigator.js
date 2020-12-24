import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import BottomNavigation from './BottomNavigation';

const Navigator = () => {
  return (
    <NavigationContainer>
      <BottomNavigation />
    </NavigationContainer>
  );
};

export default Navigator;
