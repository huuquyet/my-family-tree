import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { colors } from '../style';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Details from '../pages/Details';
import HeaderLeft from './HeaderLeft';
import HeaderTitle from './HeaderTitle';

// ------------------------------------
// Constants
// ------------------------------------
const navigationProps = {
  headerTintColor: 'white',
  headerStyle: { backgroundColor: colors.darkPurple },
  headerTitleStyle: { fontSize: 18 },
};

type StackParamList = {
  Home: undefined;
  Profile: { userId: string };
  Details: undefined;
};

const Stack = createStackNavigator<StackParamList>();

// ------------------------------------
// Navigators
// ------------------------------------
export function HomeNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={navigationProps}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          title: 'Home',
          headerLeft: () => <HeaderLeft navigation={navigation} />,
          headerTitle: () => <HeaderTitle />,
        })}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={({ navigation }) => ({
          title: 'Home',
          headerLeft: () => <HeaderLeft navigation={navigation} />,
          headerTitle: () => <HeaderTitle />,
        })}
      />
    </Stack.Navigator>
  );
}

export function ProfileNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      headerMode="screen"
      screenOptions={navigationProps}>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={({ navigation }) => ({
          title: 'Profile',
          headerLeft: () => <HeaderLeft navigation={navigation} />,
          headerTitle: () => <HeaderTitle />,
        })}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          title: 'Details',
        }}
      />
    </Stack.Navigator>
  );
}
