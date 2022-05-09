import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { images } from '../style';

interface Props {}

const HeaderTitle: React.FC<Props> = () => {
  return <Image source={images.logo_sm} style={styles.logo} />;
};

const styles = StyleSheet.create({
  logo: {
    width: 32,
    height: 32,
  },
});

export default HeaderTitle;
