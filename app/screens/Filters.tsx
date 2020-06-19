import React from 'react';
import {useSelector} from 'react-redux';

import {RootStackParamList} from 'app/types';
import {StackNavigationProp} from '@react-navigation/stack';

import Header from '../components/Header';
import Back from '../../public/img/back';
import FiltersList from '../components/FiltersList';
import {AppState} from 'app/store/configureStore';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Filters'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const Filters: React.FC<Props> = ({navigation}) => {
  const {filters} = useSelector((state: AppState) => ({
    filters: state.filters.filters,
  }));

  return (
    <>
      <Header
        navigation={navigation}
        Icon={Back}
        title="Filters"
        reversed={true}
        navigateTo="Drinks"
      />
      <FiltersList filters={filters} navigation={navigation} />
    </>
  );
};

export default Filters;
