import { ReactElement } from 'react';
import 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { RenderAPI, cleanup, render } from '@testing-library/react-native';

import DrawerNavigator from '../DrawerNavigator';
import { createTestElement, createTestProps } from '../../../../test/testUtils';

let props: any;
let component: ReactElement;
let testingLib: RenderAPI;

describe('[Drawer] navigator', () => {
  beforeEach(() => {
    props = createTestProps();

    component = createTestElement(
      <NavigationContainer>
        <DrawerNavigator {...props} />
      </NavigationContainer>,
    );

    testingLib = render(component);
  });

  afterEach(() => cleanup());

  it('should renders without crashing', () => {
    jest.useFakeTimers();

    const baseElement = testingLib.toJSON();

    jest.runAllTimers();
    expect(baseElement).toBeTruthy();
  });
});
