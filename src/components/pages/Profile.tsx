import React, { FC } from 'react';
import styled from '@emotion/native';

import { RootStackNavigationProps } from '../navigations/RootStack';

const Container = styled.View`
  flex: 1;
  background-color: transparent;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.text};
`;

interface Props {
  navigation: RootStackNavigationProps<'default'>;
}

const Profile: FC<Props> = () => {
  return (
    <Container>
      <StyledText>Profile</StyledText>
    </Container>
  );
};

export default Profile;
