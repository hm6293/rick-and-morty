import { combineReducers } from 'redux';
import charactersListReducer from './characters-list';
import charactersSearchReducer from './characters-search';

export default combineReducers({
  charactersList: charactersListReducer,
  charactersSearch: charactersSearchReducer,
});
