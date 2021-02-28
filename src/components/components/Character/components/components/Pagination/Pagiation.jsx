/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Pagination.scss'

export const Pagination = ({ comicsPerPage, totalComicsQty, paginate, currentPage }) => {

  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalComicsQty / comicsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map((number) => {

          return (
            <li key={number} className='pagination__item'>
              <a href='#'
                className={
                  currentPage === number
                    ? 'pagination__link active'
                    : 'pagination__link'
                }
                onClick={(e) => paginate(e, number)}
              >
                {number}
              </a>
            </li>)
        })
        }

      </ul>
    </nav>
  )

}