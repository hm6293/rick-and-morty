import {
  SET_SEARCH_TEXT,
  SET_FILTERS,
  SET_SELECTED_FILTERS,
  SET_SORTING,
} from '../constants/ActionConstants';

import {
  sortingOptions,
} from '../constants';

const initialState = {
  searchText: '',
  filters: {
    gender: [],
    species: [],
  },
  selectedFilers: {
    gender: [],
    species: [],
  },
  sorting: sortingOptions[0],
};

const charactersSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.searchText,
      };
    case SET_FILTERS:
      return {
        ...state,
        filters: action.filters,
      };
    case SET_SELECTED_FILTERS:
      return {
        ...state,
        selectedFilters: action.filters,
      };
    case SET_SORTING:
      return {
        ...state,
        sorting: action.sorting,
      };

    default:
      return state;
  }
};

export default charactersSearchReducer;
