import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { PORTRATE } from '../../../axios/urls'
import { ComicsComp } from './components/index'
import { Link, useParams } from 'react-router-dom'
import { getProfile, getComics } from '../../../store/action/profile'
import './Character.scss'

export const Character = () => {

  const { id } = useParams()
  const state = useSelector(state => state.characters.characters)
  const dispatch = useDispatch()
  const profile = useSelector(state => state.profile.profile)

  useEffect(() => {
    dispatch(getProfile(id, state))
    dispatch(getComics(id, state))
  }, [])

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
        </div>
      </React.Fragment>
    )
  }

  return (
    <>
      {
        Object.keys(profile).length
          ? renderProfile(profile)
          : null
      }
    </>
  )




}