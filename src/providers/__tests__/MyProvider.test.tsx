import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { render, RenderAPI } from '@testing-library/react-native';

import { MyProvider, useReducerContext } from '../MyProvider';

const FakeChild = (): React.ReactElement => {
  const { state, setUser } = useReducerContext();

  return (
    <View>
      <Text testID="TEXT">{JSON.stringify(state, null, 2)}</Text>
      <Button
        testID="BUTTON"
        onPress={(): void => {
          setUser({
            displayName: 'test',
          });
        }}
        title="Button"
      />
    </View>
  );
};

describe('[MyProvider] rendering test', () => {
  const component = (
    <MyProvider>
      <FakeChild />
    </MyProvider>
  );

  const testingLib: RenderAPI = render(component);

  it('component and snapshot matches', () => {
    const baseElement = testingLib.toJSON();

    expect(baseElement).toMatchSnapshot();
    expect(baseElement).toBeTruthy();
  });
});

// TODO: add more interaction test, refer to ThemeProvider test
