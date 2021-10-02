/**
 * @jest-environment jsdom
 */

import React from 'react'
import { cleanup, render } from '@testing-library/react'
import { PicFeed } from './pages/feed/Feed.styles'
import { getImage } from './pages/feed/Feed'
import { shallow } from 'enzyme'
import Searchbutton from './components/searchbutton/Searchbutton'
import NavProfile, { hideProfile } from './components/profile/NavProfile'
import SignupCard, { hideSignup } from './components/signup/Signup'
import LoginCard, { hideLogin } from './components/login/Login'
import LogoutCard, { hideLogout } from './components/logout/Logout'
import { BrowserRouter as Router } from 'react-router-dom'

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

describe('Hide Profile', () => {
  test('it should hide profile', () => {
    const profile = shallow(
      <Router>
        <NavProfile />
      </Router>
    )
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const result = render(profile)
    const element = result.container.querySelector('profile1')
    if (element) {
      getComputedStyle(element).display = 'none'
      expect(hideProfile()).toBe(getComputedStyle(element).display)
    }
  })

  test('it should hide login', () => {
    const login = shallow(
      <Router>
        <LoginCard />
      </Router>
    )
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const result = render(login)
    const element = result.container.querySelector('login1')
    if (element) {
      getComputedStyle(element).display = 'none'
      expect(hideLogin()).toBe(getComputedStyle(element).display)
    }
  })

  test('it should hide logout', () => {
    const logout = shallow(
      <Router>
        <LogoutCard />
      </Router>
    )
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const result = render(logout)
    const element = result.container.querySelector('logout1')
    if (element) {
      getComputedStyle(element).display = 'none'
      expect(hideLogout()).toBe(getComputedStyle(element).display)
    }
  })

  test('it should hide signup', () => {
    const signup = shallow(
      <Router>
        <SignupCard />
      </Router>
    )
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const result = render(signup)
    const element = result.container.querySelector('signup1')
    if (element) {
      getComputedStyle(element).display = 'none'
      expect(hideSignup()).toBe(getComputedStyle(element).display)
    }
  })
})
