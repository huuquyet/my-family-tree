import React, { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import AppLoading from 'expo-app-loading';
import { useAssets } from 'expo-asset';
import { useFonts } from 'expo-font';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import RootProvider from './providers';
import RootNavigator from './components/navigations/RootStack';
import Icons from './utils/Icons';

SplashScreen.preventAutoHideAsync().then();

function App(): React.ReactElement {
  const [fontsLoaded] = useFonts({
    IcoMoon: require('dooboo-ui/Icon/doobooui.ttf'),
  });

  const [assets] = useAssets(Icons);

  useEffect(() => {
    if (assets && fontsLoaded) {
      SplashScreen.hideAsync().then();
    }
  }, [assets, fontsLoaded]);

  if (!assets) {
    return <AppLoading />;
  }

  return <RootNavigator />;
}

function ProviderWrapper(): React.ReactElement {
  return (
    <RootProvider>
      <App />
    </RootProvider>
  );
}

export default gestureHandlerRootHOC(ProviderWrapper);
