import { ReactElement } from 'react';
import 'react-native';
import { RenderAPI, render } from '@testing-library/react-native';

import Page from '../Home';
import { createTestElement, createTestProps } from '../../../../test/testUtils';

let props: any;
let component: ReactElement;
let testingLib: RenderAPI;

describe('Rendering', () => {
  beforeEach(() => {
    props = createTestProps();
    component = createTestElement(<Page {...props} />);
    testingLib = render(component);
  });

  it('renders without crashing', () => {
    const baseElement = testingLib.toJSON();

    expect(baseElement).toBeTruthy();
  });
});
