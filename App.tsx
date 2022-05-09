import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import { store } from './src/store/store';
import Navigator from './src/navigator/Navigator';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigator />
        <StatusBar />
      </SafeAreaProvider>
    </Provider>
  );
}
