import {Filter} from './../../types.d';
import {AnyAction} from 'redux';
import * as actionTypes from '../actionTypes/filters';

export interface FilterState {
  filters: Filter[];
  activeFilter: string;
  isLast: boolean;
}

const initialState: FilterState = {
  filters: [],
  activeFilter: '',
  isLast: false,
};

export default (state = initialState, action: AnyAction): FilterState => {
  switch (action.type) {
    case actionTypes.SET_FILTERS:
      return {...state, filters: action.payload};
    case actionTypes.SET_ACTIVE_FILTER:
      return {...state, activeFilter: action.payload};
    case actionTypes.SET_IS_LAST:
      return {...state, isLast: action.payload};
    default:
      return state;
  }
};
