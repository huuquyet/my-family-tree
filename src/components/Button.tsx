import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

interface Props {
  title: string;
  width?: string;
  height?: string;
  color?: string;
  backgroundColor?: string;
  onPress: () => void;
  children?: string;
  textStyle?: {};
  style?: {};
}

const Button: React.FC<Props> = ({
  title = null,
  width = 'auto',
  height = 'auto',
  color = 'black',
  backgroundColor = '#cacaca',
  onPress = () => {},
  children = null,
  textStyle = {},
  style = {},
}) => {
  const btnStyle = [styles.root, { width, height, backgroundColor }, style];
  const txtStyle = [styles.text, { color }, textStyle];
  return (
    <TouchableOpacity onPress={onPress} style={btnStyle}>
      {title && <Text style={txtStyle}>{title}</Text>}
      {children}
    </TouchableOpacity>
  );
};

const styles = {
  root: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
  },
};

export default Button;
