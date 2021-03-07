import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { PORTRATE } from '../axios/urls'
import { ComicsComp } from './ComicsComp'
import { getProfile, getComics } from '../store/profile/actions'
import { loadCharsFromLink } from '../store/characters/actions'
import { Loader } from '../components/Loader'
import logo from '../logo/marvel-studios-logo.png'
import './Character.scss'

export const Character = () => {

  const dispatch = useDispatch()
  const { id } = useParams()
  const state = useSelector(state => state.characters.characters)
  const profile = useSelector(state => state.profile.profile)

  useEffect(() => {

    if (!state.length) {
      dispatch(loadCharsFromLink(id))
    }

  }, [])

  useEffect(() => {

    if (state.length) {
      dispatch(getProfile(id, state))
      dispatch(getComics(id, state))
    }

  }, [state, id])

  const renderProfile = (profile) => {

    const { name, description: desc, thumbnail: { path, extension } } = profile

    return (
      <React.Fragment >
        <div className='container'>
          <div className='wrapper'>
            <img
              className='avatar'
              src={`${path}/${PORTRATE}.${extension}`}
              alt={name}
            />
            <div className='info'>
              <p className='fs mb'><span>{name}</span></p>
              {desc
                ? <p className='fs mb'>{desc}</p>
                : null
              }
              <p className='info__comics_title fs'>Comics</p>
              <ComicsComp />
            </div>
            <Link className='back' to='/' >&#8617;</Link>
          </div>
          <footer>
            <img src={logo} alt='Marvel Studios' />
          </footer>
        </div>
      </React.Fragment>
    )
  }

  return (
    <>
      {
        Object.keys(profile).length
          ? renderProfile(profile)
          : <Loader />
      }
    </>
  )
}