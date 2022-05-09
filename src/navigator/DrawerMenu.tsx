import React from 'react';
import { View, SafeAreaView, Text, StyleSheet } from 'react-native';
import { DrawerActions, DrawerActionType } from '@react-navigation/native';
import { FontAwesome5 as FontIcon } from '@expo/vector-icons';

import { colors } from '../style';

interface Props {
  navigation: {
    dispatch: (func: DrawerActionType) => void;
  };
}

const DrawerMenu: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.head}>
        <FontIcon.Button
          name="times"
          size={20}
          color={colors.gray}
          backgroundColor="white"
          onPress={() => {
            navigation.dispatch(DrawerActions.closeDrawer());
          }}
        />
      </View>
      <View style={styles.main}>
        <Text>Drawer Menu</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DrawerMenu;
