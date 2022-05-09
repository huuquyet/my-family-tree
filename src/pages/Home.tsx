import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import Button from '../components/Button';
import { colors } from '../style';

interface Props {
  navigation: {
    navigate: (
      title: string,
      func: {
        from: string;
      },
    ) => void;
  };
}

const Home: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>Home</Text>
      <Button
        title="Go to Details"
        color="white"
        backgroundColor={colors.lightPurple}
        onPress={() => {
          navigation.navigate('Details', { from: 'Home' });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrayPurple,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Home;
