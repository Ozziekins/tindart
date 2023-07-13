/**
 * @project react-swing
 * Created by ssanjun on 2016. 7. 12..
 */

import React, { useEffect, useRef, useState } from 'react'
import {
  CardSwipe,
  SwipeButtons,
  SwipeFave,
  SwipeInfo,
  SwipeLike,
  SwipeLogo,
  SwipeNope,
  SwipeTitle,
  User
} from './Swipe.styles'
import { useDispatch, useSelector } from 'react-redux'
import NavProfile from '../../components/profile/NavProfile'
import ReactSwing from '../../../node_modules/react-swing'
import { favouriteActions } from '../../store/favourite/favourite.slice'
import { useNavigate } from 'react-router'
import { auctionActions } from '../../store/auction/auction.slice'

function showProfile() {
  document.getElementById('profile1').style.display = 'block'
}

function getImage(imageId) {
  return `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`
}

function Swipe() {
  const [stack, setStack] = useState(null)
  const stackEl = useRef()
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])
  const { photo } = useSelector((state) => state.user)

  const rejectCard = () => {
    const targetEl = stack.childElements[0]
    console.log('targetEl', targetEl)

    if (targetEl && targetEl.current) {
      // stack.getCard
      const card = stack.getCard(targetEl.current)

      // throwOut method call
      card.throwOut(100, 200, ReactSwing.DIRECTION.LEFT)
    }
  }

  const acceptCard = () => {
    const targetEl = stack.childElements[1]
    console.log('targetEl', targetEl)

    if (targetEl && targetEl.current) {
      // stack.getCard
      const card = stack.getCard(targetEl.current)

      // throwOut method call
      card.throwOut(100, 200, ReactSwing.DIRECTION.RIGHT)
    }
  }

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const likeCard = (favouriteUrl) => {
    dispatch(favouriteActions.setFavourites({ favouriteImages: favouriteUrl }))
  }

  const showInfo = (image, title, info) => {
    const auctionImage = 'url(' + getImage(image) + ')'
    dispatch(auctionActions.setAuction({ title: title, auction_description: info, auction_photo: auctionImage }))
    navigate('/auction')
  }

  useEffect(() => {
    fetch('https://api.artic.edu/api/v1/artworks?page=11')
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setItems(result.data)
        },

        (e) => {
          setIsLoaded(true)
          setError(e)
        },

        console.log(isLoaded)
      )
      .finally(setIsLoaded(false))
  }, [])

  return (
    <div>
      <SwipeLogo to="/home" />
      <User
        onClick={showProfile}
        style={{
          backgroundImage: 'url(' + photo + ')',
          backgroundSize: '60px',
          objectFit: 'contain'
        }}
      />
      <NavProfile id="profile1" currentPage="swipe" />

      <div id="viewport">
        {/*
          ReactSwing Element
        */}
        {error && <div>{error}</div>}
        <ReactSwing
          className="stack"
          setStack={(stacked) => setStack(stacked)}
          ref={stackEl}
          throwout={(e) => console.log('throwout', e)}
        >
          {items.map((item) => (
            <div key={item.id}>
              <CardSwipe
                style={{
                  backgroundImage: 'url(' + getImage(item.image_id) + ')',
                  backgroundSize: '471px 622px',
                  objectFit: 'contain'
                }}
              >
                <SwipeTitle>{item.title}</SwipeTitle>
                <SwipeButtons>
                  <SwipeNope onClick={rejectCard} />
                  <SwipeLike onClick={acceptCard} />
                  <SwipeInfo
                    onClick={() => {
                      showInfo(item.image_id, item.title, item.publication_history)
                    }}
                  />
                  <SwipeFave
                    onClick={() => {
                      likeCard(item.image_id)
                    }}
                  />
                </SwipeButtons>
              </CardSwipe>
            </div>
          ))}
        </ReactSwing>
      </div>
    </div>
  )
}

export default Swipe
