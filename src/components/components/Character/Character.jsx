import React from 'react'
import { useSelector } from 'react-redux'
import { PORTRATE } from '../../../axios/urls'
import { ComicsComp } from './components/index'
import { Link } from 'react-router-dom'
import './Character.scss'

export const Character = () => {

  const profile = useSelector(state => state.profile.profile)

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
        profile
          ? renderProfile(profile)
          : null
      }
    </>
  )




}