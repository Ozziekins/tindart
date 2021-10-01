import React, { useState, useRef, useEffect } from 'react'
import { Form, Input, Button } from './Searchbutton.styles'
import { useHistory } from 'react-router'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

function Searchbutton({ onButtonClick }) {
  const [input, setInput] = useState('')
  const [barOpened, setBarOpened] = useState(false)
  const formRef = useRef()
  const inputFocus = useRef()
  const history = useHistory()

  const onFormSubmit = (e) => {
    // When form submited, clear input, close the searchbar and do something with input
    e.preventDefault()
    setInput('')
    setBarOpened(false)
    // After form submit, do what you want with the input value
    console.log(`Form was submited with input: ${input}`)
    window.sessionStorage.setItem('Keyword', input)
    history.push('/search')
  }

  return (
    <div style={{ marginTop: '20px' }}>
      <Form
        barOpened={barOpened}
        onClick={() => {
          // When form clicked, set state of baropened to true and focus the input
          setBarOpened(true)
          inputFocus.current.focus()
        }}
        // on focus open search bar
        onFocus={() => {
          setBarOpened(true)
          inputFocus.current.focus()
        }}
        // on blur close search bar
        onBlur={() => {
          setBarOpened(false)
        }}
        // On submit, call the onFormSubmit function
        onSubmit={onFormSubmit}
        ref={formRef}
      >
        <Button
          type="submit"
          barOpened={barOpened}
          onClick={() => {
            onButtonClick(true)
          }}
          className="form-test"
        >
          Search
        </Button>
        <Input
          onChange={(e) => setInput(e.target.value)}
          ref={inputFocus}
          value={input}
          barOpened={barOpened}
          placeholder="Enter keyword ..."
        />
      </Form>
    </div>
  )
}

export default Searchbutton
