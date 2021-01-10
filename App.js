import React from 'react';
import Header from './src/components/Header';

import Navigator from './src/configs/Navigator';

import {Provider} from 'react-native-paper';

// redux
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

export default App;
