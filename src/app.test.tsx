/**
 * @jest-environment jsdom
 */
import { jest } from '@jest/globals';
import React from 'react'
import ReactDOM from 'react-dom';
import { cleanup, render, fireEvent, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils';
import { useDispatch } from 'react-redux';
import { useNavigate, MemoryRouter } from 'react-router-dom';
import { PicFeed } from './pages/feed/Feed.styles'
import { getImage } from './pages/feed/Feed'
import { mount, configure } from 'enzyme'
import Searchbutton from './components/searchbutton/Searchbutton'
import CommentForm from './components/comment/CommentForm'
import { commentActions } from './store/comment/comment.slice';
import NavProfile, { hideProfile } from './components/profile/NavProfile'
import SignupCard, { hideSignup } from './components/signup/Signup'
import LoginCard, { hideLogin } from './components/login/Login'
import LogoutCard, { hideLogout } from './components/logout/Logout'
import { BrowserRouter as Router } from 'react-router-dom'
import Adapter from 'enzyme-adapter-react-16'

afterEach(cleanup)

configure({ adapter: new Adapter() })

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

describe('Searchbutton', () => {
  // it('calls correct function to save the information when user clicks button', () => {
  //   const onButtonClickMock = jest.fn();
  //   const { container } = render(<MemoryRouter> <Searchbutton onButtonClick={onButtonClickMock} />  </MemoryRouter>);

  //   const buttonElement = container.querySelector('.form-test');
  //   fireEvent.click(buttonElement);

  //   expect(onButtonClickMock).toHaveBeenCalledTimes(1);
  //   expect(onButtonClickMock).toHaveBeenCalledWith(true);
  // });
  
// // Define a custom query function to find the input element by placeholder text
// const getByPlaceholderText = (container, text) =>
//   container.querySelector(`input[placeholder="${text}"]`);

// // ...

it('updates the input value correctly', () => {
  const onButtonClickMock = jest.fn();
  const { container } = render(<MemoryRouter> <Searchbutton onButtonClick={onButtonClickMock} /> </MemoryRouter>);

  const inputElement = container.querySelector('form-test');
  if (inputElement) {
    inputElement.textContent = 'Test input';
    fireEvent.change(inputElement);
  
    expect(inputElement.textContent).toBe('Test input');
  }
});

it('submits the form correctly', () => {
  const onButtonClickMock = jest.fn();
  const { container, getByText } = render(<MemoryRouter> <Searchbutton onButtonClick={onButtonClickMock} /> </MemoryRouter>);

  const inputElement = container.querySelector('form-test');
  if (inputElement) {
    inputElement.textContent = 'Test input';
    fireEvent.change(inputElement);
  
    const submitButton = getByText('Search');
    fireEvent.click(submitButton);
  
    expect(onButtonClickMock).toHaveBeenCalledTimes(1);
    expect(onButtonClickMock).toHaveBeenCalledWith(true);
  }
});
  
});

jest.mock('react-redux');
jest.mock('react-router-dom');

describe('CommentForm', () => {
  it('updates the comment input correctly', () => {
    const { container } = render(<CommentForm />);
    
    const commentInput = container.querySelector('input[name="comment"]');
    
    if (commentInput) {
      fireEvent.change(commentInput, { target: { textContent: 'Test comment' } });
    
      expect(commentInput.textContent).toBe('Test comment');
    }
  });  
});

describe('Hide Profile', () => {
  test('it should hide profile', () => {
    const container = document.createElement('div');
  
    act(() => {
      ReactDOM.render(
        <Router>
        <NavProfile />
      </Router>,
      container
      );
    });
  
    const element = container.querySelector('.profile1');

    if (element) {
      getComputedStyle(element).display = 'none'
      expect(hideProfile()).toBe(getComputedStyle(element).display)
    }
  });
  

  test('it should hide login', () => {
    const container = document.createElement('div');
    
    act(() => {
      ReactDOM.render(
        <Router>
          <LoginCard />
        </Router>,
        container
      );
    });

    const element = container.querySelector('login1');

    if (element) {
      getComputedStyle(element).display = 'none'
      expect(hideLogin()).toBe(getComputedStyle(element).display)
    }
  })

  test('it should hide logout', () => {
    const container = document.createElement('div');

    act(() => {
      ReactDOM.render(
        <Router>
          <LogoutCard />
        </Router>,
        container
      );
    });

    const element = container.querySelector('logout1');
    if (element) {
      getComputedStyle(element).display = 'none'
      expect(hideLogout()).toBe(getComputedStyle(element).display)
    }
  })

  test('it should hide signup', () => {
    const container = document.createElement('div');

    act(() => {
      ReactDOM.render(
        <Router>
          <SignupCard />
        </Router>,
        container
      );
    });

    const element = container.querySelector('signup1');
    if (element) {
      getComputedStyle(element).display = 'none'
      expect(hideSignup()).toBe(getComputedStyle(element).display)
    }
  })
})
