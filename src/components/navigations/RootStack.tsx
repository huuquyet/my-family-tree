import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import { useTheme } from 'dooboo-ui';

import Intro from '../pages/Intro';
import Temp from '../pages/Temp';
import { RootStackParamList } from '../../types';

export type RootStackNavigationProps<
  T extends keyof RootStackParamList = 'default',
> = StackNavigationProp<RootStackParamList, T>;

const Stack = createStackNavigator<RootStackParamList>();

function RootStack(): React.ReactElement {
  const { theme, themeType } = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Intro"
        screenOptions={{
          headerMode: themeType === 'dark' ? 'screen' : 'float',
          headerStyle: {
            backgroundColor: theme.background,
          },
          headerTitleStyle: { color: theme.text },
          headerTintColor: theme.primary,
        }}>
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Temp" component={Temp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;
