import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import DrawerNavigator from './Drawer';
import { authenticate } from '../features/app/app.slice';

function Navigator() {
  const { checked, loggedIn } = useSelector((state: any) => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authenticate({ loggedIn: true, checked: true }));
  }, []);

  // TODO: switch router by loggedIn state
  console.log('[##] loggedIn', loggedIn);

  return checked ? (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  ) : (
    <Text>Loading...</Text>
  );
}

export default Navigator;
