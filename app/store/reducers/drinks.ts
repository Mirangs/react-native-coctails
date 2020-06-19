import {AnyAction} from 'redux';

import {Drink} from '../../types';
import * as actionTypes from '../actionTypes/drinks';

export interface DrinksState {
  drinks: Drink[];
}

const initialState: DrinksState = {
  drinks: [],
};

export default (state = initialState, action: AnyAction): DrinksState => {
  switch (action.type) {
    case actionTypes.SET_DRINKS:
      return {...state, drinks: action.payload};
    default:
      return state;
  }
};
