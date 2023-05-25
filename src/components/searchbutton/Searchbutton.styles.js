import styled from 'styled-components'

export const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #97694b;
  /* Change width of the form depending if the bar is opened or not */
  width: ${(props) => (props.width)};
  /* If bar opened, normal cursor on the whole form. If closed, show pointer on the whole form so user knows he can click to open it */
  cursor: ${(props) => (props.cursor)};
  padding: 1rem;
  height: 1rem;
  border-radius: 5rem;
  transition: width 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
`

export const Input = styled.input`
  font-size: 14px;
  line-height: 1;
  background-color: transparent;
  width: 100%;
  margin-left: ${(props) => (props.margin)};
  border: none;
  color: white;
  transition: margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: white;
  }
`

export const Button = styled.button`
  //line-height: 1;
  pointer-events: ${(props) => (props.pointer)};
  cursor: ${(props) => (props.cursor)};
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
`
