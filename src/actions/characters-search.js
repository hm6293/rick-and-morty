import {
  SET_SEARCH_TEXT,
  SET_FILTERS,
  SET_SELECTED_FILTERS,
  SET_SORTING,
} from '../constants/ActionConstants';

export function onSearchTextChange(text) {
  return (dispatch) => {
    dispatch({
      type: SET_SEARCH_TEXT,
      searchText: text,
    });
  };
}

export function setFilters(filters) {
  return (dispatch) => {
    dispatch({
      type: SET_FILTERS,
      filters,
    });
  };
}

export function setSelectedFilters(filters) {
  return (dispatch) => {
    dispatch({
      type: SET_SELECTED_FILTERS,
      filters,
    });
  };
}

export function setSorting(sorting) {
  return (dispatch) => {
    dispatch({
      type: SET_SORTING,
      sorting,
    });
  };
}
