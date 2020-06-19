import React from 'react';
import {FlatList, Button} from 'react-native';
import styled from 'styled-components/native';

import {Drink as IDrink} from '../types';
import Drink from './Drink';

export interface DrinksListProps {
  drinks: IDrink[];
  onLoadMore: () => void;
  title: string;
  isLast: boolean;
}

const DrinksList: React.FC<DrinksListProps> = ({
  drinks,
  onLoadMore,
  title,
  isLast,
}) => {
  const ListHeader = () => <ListTitle>{title}</ListTitle>;

  const ListFooter = () => (
    <Button title="Load more" color="#272727" onPress={onLoadMore} />
  );

  return (
    <FlatList
      ListHeaderComponent={ListHeader}
      data={drinks}
      renderItem={({item}: {item: IDrink}) => (
        <Drink strDrink={item.strDrink} strDrinkThumb={item.strDrinkThumb} />
      )}
      keyExtractor={(item, index) => index.toString()}
      ListFooterComponent={!isLast ? ListFooter : null}
    />
  );
};

const ListTitle = styled.Text`
  font-family: Roboto-Regular;
  font-size: 14px;
  line-height: 16px;
  color: #7e7e7e;
  margin: 20px 20px 20px 0;
`;

export default DrinksList;
