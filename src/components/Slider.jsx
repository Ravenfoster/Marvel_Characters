import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Parallax, EffectCoverflow } from 'swiper'
import { PORTRATE } from '../axios/urls'
import 'swiper/swiper-bundle.css'
import './Swiper.scss'

SwiperCore.use([Navigation, Pagination, Parallax, EffectCoverflow])

export const Slider = (props) => {

  const { state, initialSlide, loadMoreChars } = props

  const settings = {

    initialSlide: initialSlide,
    onReachEnd: () => {
      loadMoreChars()
    },
    observer: true,
    speed: 800,
    spaceBetween: 0,
    slidesPerView: 5,
    centeredSlides: true,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 60,
      stretch: 0,
      depth: 60,
      modifier: 1,
    },
    navigation: true,
    breakpoints: {

      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },

      480: {
        slidesPerView: 3,
        spaceBetween: 30
      },

      640: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    }
  }

  return (
    <>
      <Swiper {...settings}  >
        {
          state.map(({ id, name, thumbnail: { path, extension } }) => {
            return (
              <SwiperSlide
                key={id}
              >
                <img
                  className='imgStyle'
                  src={`${path}/${PORTRATE}.${extension}`}
                  alt={name}
                />
                <h1 className='card_title'>{name}</h1>
                <div className='card_info' >
                  < Link className='card_info__title' to={`/${id}`}>ABOUT</Link>
                </div >
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </>
  )
}


