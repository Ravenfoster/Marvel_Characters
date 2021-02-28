import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Parallax, EffectCoverflow } from 'swiper'
import { loadChars, getMoreChars, dispatchCurrentSlide } from '../../../store/action/characters'
import { getProfile, cleanProfile, getComics } from '../../../store/action/profile'
import { useDispatch, useSelector } from 'react-redux'
import { PORTRATE, NO_PIC } from '../../../axios/urls'
import 'swiper/swiper-bundle.css'
import './Main.scss'
import logo from '../../../logo/marvel-studios-logo.png'

SwiperCore.use([Navigation, Pagination, Parallax, EffectCoverflow])

export const Main = () => {

  const state = useSelector(state => state.characters.characters)
  const currentSlide = useSelector(state => state.characters.currentSlide)
  const profile = useSelector(state => state.profile.profile)
  const dispatch = useDispatch()

  const loadMoreChars = () => {
    dispatch(getMoreChars())
  }

  const loadProfile = (id, state) => {
    dispatch(getProfile(id, state))
    dispatch(getComics(id, state))
  }

  const CurrentSlide = (number) => {
    dispatch(dispatchCurrentSlide(number))
  }

  useEffect(() => {
    if (!state.length) {
      dispatch(loadChars())
    }

    if (Object.keys(profile).length) {
      dispatch(cleanProfile())
    }

  }, [])


  const settings = {
    onBeforeDestroy: (swiper) => {
      CurrentSlide(swiper.activeIndex)
    },
    initialSlide: currentSlide,
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
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    }
  }


  const renderCards = (state) => {

    return (
      <Swiper {...settings}  >
        {
          state.map(({ id, name, thumbnail: { path, extension } }) => {
            if (path.lastIndexOf(NO_PIC) === -1) {
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
                    < Link className='card_info__title' onClick={() => loadProfile(id, state)} to={`/${name}`}>ABOUT</Link>
                  </div >
                </SwiperSlide>
              )
            }
          })
        }
      </Swiper >
    )
  }

  return (
    <>
        <div className='titleStyle'>
          <img src={logo} alt='Marvel Studios' />
        </div>
        {
          state.length
            ? renderCards(state)
            : <div className='loader'>
              <div className='lds-ellipsis'><div></div><div></div><div></div><div></div></div>
            </div>
        }
    </>
  )
}

