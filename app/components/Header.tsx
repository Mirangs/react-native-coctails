import React from 'react';
import styled from 'styled-components/native';

import {TouchableOpacity} from 'react-native';

import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from 'app/types';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Drinks' | 'Filters'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
  Icon: any;
  title: string;
  reversed?: boolean;
  navigateTo: 'Drinks' | 'Filters';
};

const Header: React.FC<Props> = ({
  navigation,
  Icon,
  title,
  reversed = false,
  navigateTo,
}) => {
  return (
    <Container reversed={reversed}>
      <LogoTitle>{title}</LogoTitle>
      <Touchable
        onPress={() => {
          navigation.navigate(navigateTo);
        }}>
        <Icon width={20} height={30} style={{marginRight: reversed ? 40 : 0}} />
      </Touchable>
    </Container>
  );
};

const Container = styled.View`
  display: flex;
  flex-direction: ${({reversed}: {reversed: boolean}) =>
    reversed ? 'row-reverse' : 'row'};

  justify-content: ${({reversed}: {reversed: boolean}) =>
    reversed ? 'flex-end' : 'space-between'};
  align-items: center;

  width: 100%;
  height: 70px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 20px 30px;
  padding-right: ${({reversed}: {reversed: boolean}) =>
    reversed ? '30px' : '10px'};

  background-color: #fff;
  elevation: 5;
`;

const LogoTitle = styled.Text`
  font-family: Roboto-Bold;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;

  color: #000000;
`;

const Touchable = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Header;
