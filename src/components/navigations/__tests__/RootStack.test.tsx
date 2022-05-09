import { ReactElement } from 'react';
import 'react-native';
import * as renderer from 'react-test-renderer';

import StackNavigator from '../RootStack';
import { createTestElement, createTestProps } from '../../../../test/testUtils';

let props: any;
let component: ReactElement;

describe('[Stack] navigator', () => {
  beforeEach(() => {
    props = createTestProps();

    component = createTestElement(<StackNavigator {...props} />);
  });

  it('should renders without crashing', async () => {
    const rendered = renderer.create(component).toJSON();

    await renderer.act(async () => {
      expect(rendered).toMatchSnapshot();
    });

    expect(rendered).toBeTruthy();
  });

  it('should renders [Dark] mode', async () => {
    component = createTestElement(<StackNavigator {...props} />, 'dark');

    const rendered = renderer.create(component).toJSON();

    await renderer.act(async () => {
      expect(rendered).toMatchSnapshot();
    });

    expect(rendered).toBeTruthy();
  });
});
