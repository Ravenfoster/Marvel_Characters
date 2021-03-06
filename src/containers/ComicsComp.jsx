import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Comics } from '../components/Comics'
import { Pagination } from '../components/Pagiation'
import { changePage } from '../store/profile/actions'
import './ComicsCorp.scss'


export const ComicsComp = () => {
  const dispatch = useDispatch()
  const comics = useSelector(state => state.profile.comics)
  const currentPage = useSelector(state => state.profile.comicsCurrentPage)
  const comicsPerPage = useSelector(state => state.profile.comicsPerPage)
  const lastComics = currentPage * comicsPerPage
  const firstComics = lastComics - comicsPerPage
  const currenComics = comics.slice(firstComics, lastComics)

  const paginate = (e, number) => {
    e.preventDefault()
    dispatch(changePage(number))
  }

  return (
    <>
      <div className='info__comics'>
        {currenComics
          ? <Comics currenComics={currenComics} />
          : <h1>Loading ...</h1>

        }

      </div>
      <div>
        <Pagination
          comicsPerPage={comicsPerPage}
          totalComicsQty={comics.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </>
  )

}