import React, { useState, useRef } from 'react'
import { Form, Input, Button } from './Searchbutton.styles'
import { useNavigate } from 'react-router'
import { configure } from 'enzyme'

function Searchbutton({ onButtonClick }) {
  const [input, setInput] = useState('')
  const [baropened, setBaropened] = useState(false)
  const formRef = useRef()
  const inputFocus = useRef()
  const navigate = useNavigate()

  const onFormSubmit = (e) => {
    // When form submited, clear input, close the searchbar and do something with input
    e.preventDefault()
    setInput('')
    setBaropened(false)
    // After form submit, do what you want with the input value
    console.log(`Form was submited with input: ${input}`)
    window.sessionStorage.setItem('Keyword', input)
    navigate('/search')
  }

  return (
    <div style={{ marginTop: '20px' }}>
      <Form
        width={baropened ? '30rem' : '2rem'}
        cursor={baropened ? 'auto' : 'pointer'}
        onClick={() => {
          // When form clicked, set state of baropened to true and focus the input
          setBaropened(true)
          inputFocus.current.focus()
        }}
        // on focus open search bar
        onFocus={() => {
          setBaropened(true)
          inputFocus.current.focus()
        }}
        // on blur close search bar
        onBlur={() => {
          setBaropened(false)
        }}
        // On submit, call the onFormSubmit function
        onSubmit={onFormSubmit}
        ref={formRef}
      >
        <Button
          type="submit"
          pointer={baropened ? 'auto' : 'none'}
          cursor={baropened ? 'pointer' : 'none'}
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
          margin={baropened ? '1rem' : '0rem'}
          placeholder="Enter keyword ..."
        />
      </Form>
    </div>
  )
}

export default Searchbutton
