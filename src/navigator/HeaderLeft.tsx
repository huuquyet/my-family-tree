import React from 'react';
import { StyleSheet } from 'react-native';
import { FontAwesome5 as FontIcon } from '@expo/vector-icons';

interface Props {
  navigation: {
    openDrawer: () => void;
  };
}

const HeaderLeft: React.FC<Props> = ({ navigation }) => {
  return (
    <FontIcon.Button
      name="bars"
      color="white"
      backgroundColor="transparent"
      onPress={() => {
        navigation.openDrawer();
      }}
      style={styles.button}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    paddingLeft: 15,
  },
});

export default HeaderLeft;
