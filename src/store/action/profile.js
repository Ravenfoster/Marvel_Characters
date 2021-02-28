import {
  LOAD_PROFILE,
  CLEAN_PROFILE,
  LOAD_COMICS,
  CHANGE_CURRENT_PAGE
} from './actionTypes'
import { request } from '../../axios/axios'
import { KEY_PUBLIC, CHARS, COMICS } from '../../axios/urls'


export const getProfile = (id, state) => {
  return dispatch => {
    const character = state.find((elem) => elem.id === id)
    const profile = {
      name: character.name,
      description: character.description,
      thumbnail: {
        path: character.thumbnail.path,
        extension: character.thumbnail.extension
      }
    }
    dispatch(dispatchProfile(profile))
  }
}

export const getComics = (id) => {
  return async dispatch => {
    const comics = await request.get(`${CHARS}/${id}/${COMICS}`, {
      params: {
        apikey: KEY_PUBLIC
      }
    }).then(result => result.data.data.results)

    dispatch(dispatchComics(comics))
  }
}

const dispatchProfile = (profile) => {
  return {
    type: LOAD_PROFILE,
    profile
  }
}
const dispatchComics = (comics) => {
  return {
    type: LOAD_COMICS,
    comics
  }
}

export const cleanProfile = () => {
  return {
    type: CLEAN_PROFILE,
  }
}

export const changePage = (number) => {
  return {
    type: CHANGE_CURRENT_PAGE,
    number
  }
}