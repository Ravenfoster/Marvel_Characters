import React from 'react'
import { PORTRATE_MEDIUM } from '../../../../../../axios/urls'
import './Comics.scss'

export const Comics = ({ currenComics }) => {

  return (
    <>
      {currenComics.length
        ? currenComics.map(({ id, title, thumbnail: { path, extension } }) => {
          return (
            <React.Fragment key={id}>
              <div className='info__item'>
                <img
                  src={`${path}/${PORTRATE_MEDIUM}.${extension}`}
                  alt={title}
                />
                <p className='info__title'>{title}</p>

              </div>
            </React.Fragment>
          )
        })
        : <h1>Loading...</h1>
      }
    </>
  )
}