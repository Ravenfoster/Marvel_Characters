import { combineReducers } from 'redux'
import { characters } from './characters'
import { profile } from './profile'

export const rootReducer = combineReducers({
  characters,
  profile
})

