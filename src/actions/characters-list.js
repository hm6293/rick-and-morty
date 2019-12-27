import {
  FETCH_CHARACTERS_LIST,
  FETCH_CHARACTERS_LIST_SUCCESS,
  FETCH_CHARACTERS_LIST_FAILURE,
} from '../constants/ActionConstants';

import {
  getCharactersList,
} from '../services/characters-list';

export function fetchCharactersList(url) {
  return async (dispatch) => {
    dispatch({
      type: FETCH_CHARACTERS_LIST,
    });
    try {
      const data = await getCharactersList(url);
      dispatch({
        type: FETCH_CHARACTERS_LIST_SUCCESS,
        characters: data.results,
        pageInfo: data.info,
      });
    } catch (err) {
      dispatch({
        type: FETCH_CHARACTERS_LIST_FAILURE,
        error: err,
      });
    }
  };
}
