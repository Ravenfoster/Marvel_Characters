import { LOAD_CHAR, CURRENT_SLIDE } from './actionTypes'
import { request } from '../../axios/axios'
import { KEY_PUBLIC, CHARS } from '../../axios/urls'


export const loadChars = () => {
  return async dispatch => {

    try {
      const response = await request.get(CHARS, {
        params: {
          apikey: KEY_PUBLIC,
          limit: 7
        }
      }).then(result => result.data.data.results)

      dispatch(dispatchChars(response))

    } catch (error) {
      console.error(error);
    }
  }
}

export const getMoreChars = () => {
  return async (dispatch, getState) => {
    const { characters: { characters } } = getState()
    const stateLenght = characters.length
    try {
      const response = await request.get(CHARS, {
        params: {
          apikey: KEY_PUBLIC,
          limit: 5,
          offset: stateLenght
        }
      }).then(result => result.data.data.results)

      dispatch(dispatchChars(response))

    } catch (error) {
      console.error(error);
    }
  }
}

const dispatchChars = (characters) => {
  return {
    type: LOAD_CHAR,
    characters
  }
}

export const dispatchCurrentSlide = (number) => {
  return {
    type: CURRENT_SLIDE,
    number
  }
}
