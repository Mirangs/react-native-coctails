import React from 'react';
import styled from 'styled-components/native';
import {Text} from 'react-native';
import {Drink as DrinkProps} from '../types';

const Drink: React.FC<DrinkProps> = ({strDrink, strDrinkThumb}) => {
  return (
    <Container>
      <DrinkImage
        source={{uri: strDrinkThumb}}
        style={{width: 100, height: 100}}
      />
      <Text>{strDrink}</Text>
    </Container>
  );
};

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 40px;
`;

const DrinkImage = styled.Image`
  width: 100px;
  height: 100px;
  margin-right: 20px;
`;

const DrinkName = styled.Text`
  font-family: Roboto-Regular;
  font-size: 16px;
  line-height: 19px;
  color: #7e7e7e;
`;

export default Drink;
