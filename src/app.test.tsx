/**
 * @jest-environment jsdom
 */

import React from 'react'
import { cleanup } from '@testing-library/react'
import { PicFeed } from './pages/feed/Feed.styles'
import { getImage } from './pages/feed/Feed'
import './components/profile/NavProfile'
import { shallow } from 'enzyme'
import Searchbutton from './components/searchbutton/Searchbutton'

afterEach(cleanup)

describe('Get image by ID', () => {
  test('it should return image', () => {
    const input = { image_id: '1f17b500-e002-58e3-1812-2ba8320cb4b8' }
    const imageUrl = `https://www.artic.edu/iiif/2/${input.image_id}/full/843,/0/default.jpg`

    const output = (
      <PicFeed style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: '450px 357px', objectFit: 'contain' }} />
    )
    expect(getImage(input.image_id)).toEqual(output)
  })
})

describe('BaseButton', () => {
  describe('when user clicks button', () => {
    it('calls correct function to save the information', () => {
      const onButtonClickMock = jest.fn()
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const wrapper = shallow(<Searchbutton onButtonClick={onButtonClickMock} />)
      const buttonElement = wrapper.find('.form-test') // step 1 above
      buttonElement.simulate('click') // step 2

      expect(onButtonClickMock).toHaveBeenCalledTimes(1) // step 3
      expect(onButtonClickMock).toHaveBeenCalledWith(true)
    })
  })
})

// describe('Hide Profile', () => {
//   test('it should hide profile', () => {
//     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//     // @ts-ignore
//     expect(hideProfile()).toBe((document.getElementById('profile1').style.display = 'none'))
//   })
// })
