import * as actionTypes from '../actionTypes/filters';
import {Filter} from 'app/types';

export const setFilters = (filters: Filter[]) => ({
  type: actionTypes.SET_FILTERS,
  payload: filters,
});

export const setActiveFilter = (filter: string) => ({
  type: actionTypes.SET_ACTIVE_FILTER,
  payload: filter,
});

export const setIsLast = (isLast: boolean) => ({
  type: actionTypes.SET_IS_LAST,
  payload: isLast,
});
