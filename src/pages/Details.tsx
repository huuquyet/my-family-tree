import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import Button from '../components/Button';
import { colors } from '../style';

interface Props {
  route: {
    params: { from: string };
  };
  navigation: {
    goBack: {};
  };
}

const Details: React.FC<Props> = ({
  route = { params: { from: '' } },
  navigation = { goBack: () => null },
}) => {
  const from = route?.params?.from;
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>{`Details (from ${from})`}</Text>
      <Button
        title="Go Back"
        color="white"
        backgroundColor={colors.pink}
        onPress={() => navigation.goBack}
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

export default Details;
