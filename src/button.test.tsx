import { cleanup } from '@testing-library/react'
import Searchbutton from './components/searchbutton/Searchbutton'
import { shallow } from 'enzyme'
import React from 'react'

afterEach(cleanup)

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
