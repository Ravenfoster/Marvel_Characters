import {
  LOAD_CHAR, CURRENT_SLIDE, LOAD_CHARS_FROM_LINK
} from './actionTypes'

const initState = {
  initialSlide: 1,
  characters: []
}

export const characters = (state = initState, action) => {
  switch (action.type) {
    case LOAD_CHAR:
      return { ...state, characters: [...state.characters, ...action.characters] };
    case CURRENT_SLIDE:
      return { ...state, initialSlide: action.number };
    case LOAD_CHARS_FROM_LINK:
      return state;
    default: return state
  }
}


