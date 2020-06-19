import React, {useState, useEffect, useCallback} from 'react';
import styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList, Filter as IFilter} from 'app/types';
import {useDispatch, useSelector} from 'react-redux';
import {Text} from 'react-native';

import DrinksList from '../components/DrinksList';
import Header from '../components/Header';
import Spinner from '../components/Spinner';

import {setDrinks} from '../store/actions/drinks';
import {setFilters, setActiveFilter, setIsLast} from '../store/actions/filters';
import {AppState} from 'app/store/configureStore';
import Filter from '../../public/img/filter.svg';
import Container from '../components/Container';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Drinks'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const App: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const {drinks, activeFilter, filters, isLast} = useSelector(
    (state: AppState) => ({
      drinks: state.drinks.drinks,
      activeFilter: state.filters.activeFilter,
      filters: state.filters.filters,
      isLast: state.filters.isLast,
    }),
  );

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      const filtersRes = await fetch(
        'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list',
      );
      if (!filtersRes.ok) {
        return setError(true);
      }
      const filtersData = await filtersRes.json();
      dispatch(
        setFilters(
          filtersData.drinks.map((filter: {strCategory: string}) => ({
            name: filter.strCategory,
            active: true,
          })),
        ),
      );
      dispatch(setActiveFilter(filtersData.drinks[0].strCategory));
      setLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (filters.length !== 0) {
      let filterIndex = filters.findIndex((filter: IFilter) => filter.active);
      if (filterIndex === -1) {
        dispatch(setDrinks([]));
        dispatch(setIsLast(true));
        dispatch(setActiveFilter(''));
        return;
      }

      dispatch(setActiveFilter(filters[filterIndex].name));

      if (filterIndex === filters.length - 1) {
        dispatch(setIsLast(true));
      }
    }
  }, [filters]);

  useEffect(() => {
    const fetchData = async () => {
      if (activeFilter) {
        setLoading(true);

        const drinksRes = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${activeFilter}`,
        );
        if (!drinksRes.ok) {
          return setError(true);
        }
        const drinksData = await drinksRes.json();

        dispatch(setDrinks(drinksData.drinks));
        setLoading(false);
      }
    };

    fetchData();
  }, [activeFilter]);

  const onLoadMoreDrinks = () => {
    const activeFilterIndex = filters.findIndex(
      (filter) => filter.name === activeFilter,
    );
    if (activeFilterIndex === -1) {
      setError(true);
      return;
    }

    if (
      activeFilterIndex === filters.length - 1 ||
      !filters[activeFilterIndex + 1].active
    ) {
      dispatch(setIsLast(true));
      return;
    }

    dispatch(setActiveFilter(filters[activeFilterIndex + 1].name));
  };

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Text>Something went wrong</Text>;
  }

  return (
    <>
      <Header
        navigation={navigation}
        Icon={Filter}
        title="Drinks"
        navigateTo={'Filters'}
      />
      <Container>
        <DrinksList
          drinks={drinks}
          onLoadMore={onLoadMoreDrinks}
          title={activeFilter}
          isLast={isLast}
        />
      </Container>
    </>
  );
};

export default App;
