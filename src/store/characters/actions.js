import { LOAD_CHAR, CURRENT_SLIDE } from './actionTypes'
import { request } from '../../axios/axios'
import { KEY_PUBLIC, CHARS, TEN } from '../../axios/urls'


export const loadChars = () => {
  return async (dispatch, getState) => {
    const { characters: { characters } } = getState()
    const stateLenght = characters.length
    try {
      const response = await request.get(CHARS, {
        params: {
          apikey: KEY_PUBLIC,
          limit: TEN,
          offset: stateLenght
        }
      }).then(result => result.data.data.results)

      dispatch(dispatchChars(response))

    } catch (error) {
      console.error(error);
    }
  }
}

export const loadCharsFromLink = (id) => {

  let array = []
  return async dispatch => {

    try {
      let item

      do {

        try {

          let response = await request.get(CHARS, {
            params: {
              apikey: KEY_PUBLIC,
              limit: TEN,
              offset: array.length
            }
          }).then(result => result.data.data.results)

          array = [...array, ...response]
          item = response.findIndex((el) => el.id === +id)

        } catch (err) {
          console.error(err)
        }

      } while (item === -1)

      dispatch(dispatchChars(array))

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
