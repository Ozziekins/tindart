import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch} from 'react-redux'
import { Btns, Card, CardContent, Form, FormContent, CommentCard, CommentBtn } from './Comment.styles'
import { commentActions } from '../../store/comment/comment.slice'

function hideComment() {
  document.getElementById('comment1').style.display = 'none'
}

function CommentForm() {
  const navigate = useNavigate()
  const [comm, setComm] = useState('')
  const dispatch = useDispatch()

  const onSubmit = async (e) => {
    e.preventDefault()
    dispatch(
      commentActions.setComments({
        commentTexts: comm
      })
    )

    hideComment()
    navigate('/feed')
  }

  return (
    <CommentCard id="comment1">
      <Card>
        <CardContent>
          <Form onSubmit={onSubmit}>
            <label htmlFor="comment" style={{ paddingTop: '13px', color: '#ABAAAA' }}>
              &nbsp;Comment
            </label>
            <FormContent
              id="comment"
              name="comment"
              value={comm}
              label="CommentForm"
              placeholder="Write your comment here..."
              onChange={({ target }) => setComm(target.value)}
              autoComplete="on"
            />
            <Btns>
              <CommentBtn type="submit" name="submit" value="CommentButton" />
            </Btns>
          </Form>
        </CardContent>
      </Card>
    </CommentCard>
  )
}

export default CommentForm