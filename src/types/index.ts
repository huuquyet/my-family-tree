import { FC } from 'react';
import { StyleProp, TextStyle } from 'react-native';

export interface User {
  displayName: string;
  age: number;
  job: string;
}

interface IconProps {
  style?: StyleProp<TextStyle>;
  width?: number | string;
  height?: number | string;
  children?: never;
}

export type IconType = FC<IconProps>;

export type BottomTabParamList = {
  default: undefined;
};

export type DrawerParamList = {
  default: undefined;
};

export type RootStackParamList = {
  default: undefined;
  Intro: undefined;
  Temp: { param: string };
};
