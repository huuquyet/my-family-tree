import React from 'react';
import { RouteProp } from '@react-navigation/core';
import styled from '@emotion/native';
import { Button, Icon, useTheme } from 'dooboo-ui';

import { RootStackNavigationProps } from '../navigations/RootStack';
import { RootStackParamList } from '../../types';

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

interface Props {
  navigation: RootStackNavigationProps<'Temp'>;
  route: RouteProp<RootStackParamList, 'Temp'>;
}

function Page(props: Props): React.ReactElement {
  const { theme } = useTheme();

  const {
    route: {
      params: { param },
    },
    navigation,
  } = props;

  return (
    <Container>
      <Button
        testID="btn-back"
        onPress={(): void => navigation.goBack()}
        leftElement={
          <Icon
            name="chevron-left-light"
            size={16}
            color={theme.textContrast}
            style={{
              marginRight: 12,
            }}
          />
        }
        text={param}
      />
    </Container>
  );
}

export default Page;
