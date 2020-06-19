import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {FlatList, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {StackNavigationProp} from '@react-navigation/stack';

import Container from '../components/Container';
import Filter from './Filter';
import {Filter as IFilter, RootStackParamList} from 'app/types';
import {setFilters} from '../store/actions/filters';

export interface Props {
  filters: IFilter[];
  navigation: ProfileScreenNavigationProp;
}

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Filters'
>;

const FiltersList: React.FC<Props> = ({filters, navigation}) => {
  const [filtersTemp, setFiltersTemp] = useState<IFilter[]>(filters);
  const dispatch = useDispatch();

  const onFilterPressed = (name: string) => {
    const newFilter = filtersTemp.map((filter) => {
      if (filter.name === name) {
        return {
          name,
          active: !filter.active,
        };
      } else {
        return filter;
      }
    });

    setFiltersTemp(newFilter);
  };

  const onApplyPressed = async () => {
    const sortedFilters = filtersTemp.sort((a, b) =>
      a.active === b.active ? 0 : a.active ? -1 : 1,
    );
    console.log(sortedFilters);
    dispatch(setFilters(sortedFilters));
    navigation.navigate('Drinks');
  };

  const ListFooter = () => (
    <Button title="Apply" color="#272727" onPress={onApplyPressed} />
  );

  return (
    <FiltersContainer>
      <FlatList
        data={filtersTemp}
        renderItem={({item}: {item: IFilter}) => (
          <Filter
            name={item.name}
            onFilterPressed={onFilterPressed}
            isActive={item.active}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        ListFooterComponent={ListFooter}
      />
    </FiltersContainer>
  );
};

const FiltersContainer = styled(Container)`
  padding-top: 30px;
`;

export default FiltersList;
