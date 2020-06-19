import {combineReducers} from 'redux';

import drinksReducer from './reducers/drinks';
import filtersReducer from './reducers/filters';

const rootReducer = combineReducers({
  drinks: drinksReducer,
  filters: filtersReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
