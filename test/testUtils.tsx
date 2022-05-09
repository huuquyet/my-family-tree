import React, {ReactElement} from 'react';
import 'react-native';
import {ThemeType} from 'dooboo-ui';

import RootProvider from '../src/providers';

export const createTestElement = (
  child: ReactElement,
  themeType?: ThemeType,
): ReactElement => (
  <RootProvider initialThemeType={themeType}>{child}</RootProvider>
);

export const createTestProps = (
  obj?: object,
  moreScreenProps?: object,
): object | unknown | any => ({
  navigation: {
    navigate: jest.fn(),
    goBack: jest.fn(),
  },
  screenProps: {
    changeThemeType: jest.fn(),
    ...moreScreenProps,
  },
  ...obj,
});
