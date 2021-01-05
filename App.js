import React from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import Header from './src/components/Header';

import Navigator from './src/configs/Navigator';

import {Provider} from 'react-native-paper';

import {Provider as ReduxProvider} from 'react-redux';
import store from './src/store/';

const App = () => {
  return (
    <>
      <ReduxProvider store={store}>
        <Provider>
          <Header />
          <Navigator />
        </Provider>
      </ReduxProvider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'red',
  },
});

export default App;
