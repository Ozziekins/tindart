import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import { Btns, Card, CardContent, Form, FormContent, CommentCard, CommentBtn } from './Comment.styles'
import { commentActions } from '../../store/comment/comment.slice'
import authService from '../../services/authService'

function hideComment() {
  document.getElementById('comment1').style.display = 'none'
}

function CommentForm() {
  const navigate = useNavigate()
  const [comm, setComm] = useState('')
  const dispatch = useDispatch()
  const login = useSelector((state) => state.user.username);
  const { commentTexts } = useSelector((state) => state.comment)

  const onSubmit = async (e) => {
    e.preventDefault()
    dispatch(
      commentActions.setComments({
        commentTexts: comm
      })
    )
    authService.submitComments(login, commentTexts);
    setComm('')
    hideComment()
    navigate('/feed')
  }

  const commentRef = useRef(null);

  const handleClickOutside = (event) => {
    if (commentRef.current && !commentRef.current.contains(event.target)) {
      hideComment();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <CommentCard id="comment1">
      <Card ref={commentRef}>
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
              <CommentBtn type="submit" name="submit" value="Comment" />
            </Btns>
          </Form>
        </CardContent>
      </Card>
    </CommentCard>
  )
}

export default CommentForm
