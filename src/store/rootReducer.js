import { combineReducers } from 'redux'
import { characters } from './characters/reducer'
import { profile } from './profile/reducer'

export const rootReducer = combineReducers({
  characters,
  profile
})

