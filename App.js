import 'react-native-gesture-handler';
import React from 'react';

import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {LogBox, StatusBar} from 'react-native';
import {colors} from './src/services/utilities/colors';
import {MainNavigator} from './src/services/navigation';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';

// LogBox.ignoreLogs(['Warning: ...']);
// LogBox.ignoreAllLogs();

const persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView style={{flex: 1}}>
          <PersistGate loading={null} persistor={persistor}>
            <StatusBar
              backgroundColor={colors.white}
              translucent={false}
              barStyle={'dark-content'}
            />
            <MainNavigator />
          </PersistGate>
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
