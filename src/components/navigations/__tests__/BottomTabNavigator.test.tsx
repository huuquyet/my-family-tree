import { ReactElement } from 'react';
import 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { RenderAPI, render } from '@testing-library/react-native';

import BottomTabNavigator from '../BottomTabNavigator';
import { createTestElement, createTestProps } from '../../../../test/testUtils';

let props: any;
let component: ReactElement;
let testingLib: RenderAPI;

describe('[BottomTab] navigator', () => {
  beforeEach(() => {
    props = createTestProps();

    component = createTestElement(
      <NavigationContainer>
        <BottomTabNavigator {...props} />
      </NavigationContainer>,
    );

    testingLib = render(component);
  });

  it('should renders without crashing', () => {
    jest.useFakeTimers();

    const baseElement = testingLib.toJSON();

    jest.runAllTimers();
    expect(baseElement).toBeTruthy();
  });
});
