import {
  LOAD_PROFILE,
  CLEAN_PROFILE,
  LOAD_COMICS,
  CHANGE_CURRENT_PAGE
} from '../action/actionTypes'
const initState = {
  profile: {},
  comics: [],
  comicsCurrentPage: 1,
  comicsPerPage: 5,

}

export const profile = (state = initState, action) => {
  switch (action.type) {
    case LOAD_PROFILE:
      return { ...state, profile: action.profile };
    case LOAD_COMICS:
      return { ...state, comics: [...action.comics] };
    case CHANGE_CURRENT_PAGE:
      return { ...state, comicsCurrentPage: action.number };
    case CLEAN_PROFILE:
      return initState;
    default: return state
  }
}