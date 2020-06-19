import * as actionTypes from '../actionTypes/drinks';
import {Drink} from '../../types';

export const setDrinks = (drinks: Drink[]) => ({
  type: actionTypes.SET_DRINKS,
  payload: drinks,
});
