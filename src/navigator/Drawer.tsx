import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import DrawerMenu from './DrawerMenu';
import TabNavigator from './Tabs';

const Drawer = createDrawerNavigator();

function DrawerMenuContainer(props: any) {
  const { state, ...rest } = props;
  const newState = { ...state };
  newState.routes = newState.routes.filter((item: any) => item.name !== 'Home');
  return (
    <DrawerContentScrollView {...props}>
      <DrawerMenu {...props} />
      <DrawerItemList state={newState} {...rest} />
    </DrawerContentScrollView>
  );
}

export default function () {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={DrawerMenuContainer}>
      <Drawer.Screen name="Home" component={TabNavigator} />
    </Drawer.Navigator>
  );
}
