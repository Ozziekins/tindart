// /**
//  * @jest-environment jsdom
//  */
//
// import React from 'react'
// import 'jest-styled-components'
// import { BrowserRouter } from 'react-router-dom'
// import { cleanup, render } from '@testing-library/react'
// import { act } from 'react-dom/test-utils'
// import Feed from './pages/feed/Feed'
//
// afterEach(cleanup)
//
// // it('should pass empty test', () => {
// //   expect(true).toBeTruthy()
// // })
// const container = null
// const mockData = {
//   image_id: '1f17b500-e002-58e3-1812-2ba8320cb4b8',
//   title: 'Vlakplaas: 2 June 1999 (drive-by shooting)',
//   artist_title: 'Jo Ractliffe',
//   date_display: '1999, printed 2002',
//   place_of_origin: 'null'
// }
//
// // describe('FeedPosts', () => {
// //   it('Gets Image Title', () => {
// //     const { queryByText } = render(<Feed data={mockData} />)
// //
// //     expect(queryByText('Sentry, the (Trade Paperback)')).toBeTruthy()
// //   })
// //
// //   it('Character Description', () => {
// //     const { queryByText } = render(<ComicInfo data={mockData} />)
// //
// //     expect(queryByText('A forgotten hero, he must unravel the conspiracy to erase his memory.')).toBeTruthy()
// //   })
// // })
//
// describe('SomeComponent' () => {
//   it('validates model on button click', () => {
//     const handleSubmit = jest.fn();
//     const wrapper = mount(
//       <Login handleSubmit={handleSubmit}/>
//     );
//     const instance = wrapper.instance()
//     const submitBtn = app.find('#sign-in')
//     submitBtn.simulate('click')
//     expect(handleSubmit).toHaveBeenCalled()
//   })
// }
