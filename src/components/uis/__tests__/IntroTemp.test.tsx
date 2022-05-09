import { ReactElement } from 'react';
import 'react-native';
import { render, RenderAPI } from '@testing-library/react-native';

import IntroTemp from '../IntroTemp';
import { createTestElement, createTestProps } from '../../../../test/testUtils';

let props: any;
let component: ReactElement;
let testingLib: RenderAPI;

describe('[IntroTemp] render', () => {
  props = createTestProps();

  component = createTestElement(<IntroTemp {...props} />);

  it('renders without crashing', () => {
    testingLib = render(component);

    const baseElement = testingLib.toJSON();

    expect(baseElement).toMatchSnapshot();
    expect(baseElement).toBeTruthy();
  });
});
