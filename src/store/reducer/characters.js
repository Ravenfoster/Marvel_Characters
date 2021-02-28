import {
  LOAD_CHAR, CURRENT_SLIDE
} from '../action/actionTypes.js'

const initState = {
  currentSlide: 1,
  characters: []
}

export const characters = (state = initState, action) => {
  switch (action.type) {
    case LOAD_CHAR:
      return { ...state, characters: [...state.characters, ...action.characters] };
    case CURRENT_SLIDE:
      return { ...state, currentSlide: action.number };
    default: return state
  }
}


