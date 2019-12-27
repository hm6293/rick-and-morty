import {
  FETCH_CHARACTERS_LIST,
  FETCH_CHARACTERS_LIST_SUCCESS,
  FETCH_CHARACTERS_LIST_FAILURE,
} from '../constants/ActionConstants';

const initialState = {
  characters: [],
  isLoading: false,
  error: {},
};

const charactersListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS_LIST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_CHARACTERS_LIST_SUCCESS:
      return {
        ...state,
        characters: action.characters,
        isLoading: false,
      };
    case FETCH_CHARACTERS_LIST_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default charactersListReducer;
