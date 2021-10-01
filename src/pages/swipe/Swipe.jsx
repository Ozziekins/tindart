/**
 * @project react-swing
 * Created by ssanjun on 2016. 7. 12..
 */

import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import {
  CardSwipe,
  SwipeButtons,
  SwipeFave,
  SwipeInfo,
  SwipeLike,
  SwipeLogo,
  SwipeNext,
  SwipeNope,
  SwipeTitle,
  User
} from './Swipe.styles'
import { useSelector } from 'react-redux'
import NavProfile from '../../components/profile/NavProfile'

function showProfile() {
  document.getElementById('profile1').style.display = 'block'
}

import ReactSwing from '../../../node_modules/react-swing'
import { PicFeed } from '../feed/Feed.styles'

function getImage(imageId) {
  const imageUrl = `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`

  return imageUrl
}

function Swipe() {
  const [stack, setStack] = useState(null)
  const [cardCount, setCardCount] = useState(4)
  const stackEl = useRef()
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])
  const { username, description, photo } = useSelector((state) => state.user)

  // throwOut Method
  const throwCard = () => {
    // ReactSwing Card Directions
    console.log('ReactSwing.DIRECTION', ReactSwing.DIRECTION)

    console.log('stack', stack)
    console.log('stack.getConfig', stack.getConfig())
    console.log('stackEl', stackEl)

    // ReactSwing Component Childrens
    const targetEl = stack.childElements[1]
    console.log('targetEl', targetEl)

    if (targetEl && targetEl.current) {
      // stack.getCard
      const card = stack.getCard(targetEl.current)

      console.log('card', card)

      // throwOut method call
      card.throwOut(100, 200, ReactSwing.DIRECTION.RIGHT)
    }
  }

  const addCard = () => {
    setCardCount(cardCount + 1)
  }

  const renderCards = () => {
    const cardData = [
      {
        icon: '♣',
        className: 'clubs'
      },
      {
        icon: '♦',
        className: 'diamonds'
      },
      {
        icon: '♥',
        className: 'hearts'
      },
      {
        icon: '♠',
        className: 'spades'
      }
    ]

    const cards = []

    for (let i = 0; i < cardCount; i++) {
      const data = cardData[i % cardData.length]

      cards.push(
        <div key={i} className={`card ${data.className}`} ref={`card${i}`}>
          {data.icon}
        </div>
      )
    }

    return cards
  }

  useEffect(() => {
    fetch('https://api.artic.edu/api/v1/artworks')
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setItems(result.data)
        },

        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
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
      <NavProfile id="profile1" />
      <div id="viewport">
        {/*
          ReactSwing Element
        */}
        <ReactSwing
          className="stack"
          setStack={(stack) => setStack(stack)}
          ref={stackEl}
          throwout={(e) => console.log('throwout', e)}
        >
          {/*
              children elements is will be Card
          */}
          {/**
           <div className="card clubs" ref="card1" throwout={(e) => console.log('card throwout', e)}>
           ♣
           </div>
           <div className="card diamonds" ref="card2">
           ♦
           </div>
           <div className="card hearts" ref="card3">
           ♥
           </div>
           <div className="card spades" ref="card4">
           ♠
           </div>
           */}
          {/*{renderCards()}*/}
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
                  <SwipeNope />
                  <SwipeLike />
                  <SwipeInfo />
                  <SwipeFave />
                  <SwipeNext />
                </SwipeButtons>
              </CardSwipe>
            </div>
          ))}
        </ReactSwing>
      </div>
      <div className="control">
        <button type="button" onClick={throwCard.bind(this)}>
          throw Card
        </button>

        <button type="button" onClick={addCard.bind(this)}>
          add Card
        </button>
      </div>
    </div>
  )
}

export default Swipe
