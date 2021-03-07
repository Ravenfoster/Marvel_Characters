import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadChars } from '../store/characters/actions'
import { cleanProfile } from '../store/profile/actions'
import { Loader } from '../components/Loader'
import { Slider } from '../components/Slider'
import logo from '../logo/marvel-studios-logo.png'
import './Main.scss'

export const Main = () => {

  const dispatch = useDispatch()
  const state = useSelector(state => state.characters.characters)
  const initialSlide = useSelector(state => state.characters.initialSlide)
  const profile = useSelector(state => state.profile.profile)

  const loadMoreChars = () => {
    dispatch(loadChars())
  }

  useEffect(() => {
    if (!state.length) {
      dispatch(loadChars())
    }

    if (Object.keys(profile).length) {
      dispatch(cleanProfile())
    }

  }, [])

  return (
    <>
      <div className='title'>
        <img src={logo} alt='Marvel Studios' />
      </div>
      {
        state.length
          ?
          <Slider
            state={state}
            initialSlide={initialSlide}
            loadMoreChars={loadMoreChars}
          />
          : <Loader />
      }
    </>
  )
}

