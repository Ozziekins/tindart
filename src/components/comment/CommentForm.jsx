import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Btns, Card, CardContent, Form, FormContent, CommentCard, CommentBtn } from './Comment.styles'
import { commentActions } from '../../store/comment/comment.slice'

function hideComment() {
  document.getElementById('comment1').style.display = 'none'
}

function CommentForm() {
  const history = useHistory()
  const [comm, setComm] = useState('')
  const commentTexts = useSelector((state) => state.comment)
  const dispatch = useDispatch()

  const onSubmit = async (e) => {
    e.preventDefault()
    dispatch(
      commentActions.setComments({
        commentTexts: comm
      })
    )

    hideComment()
    history.replace('/feed')
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
            />
            <Btns>
              <CommentBtn type="submit" name="submit" value="Comment" />
            </Btns>
          </Form>
        </CardContent>
      </Card>
    </CommentCard>
  )
}

export default CommentForm
