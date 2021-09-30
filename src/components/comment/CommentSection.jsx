import React from 'react'
import { CommentAndAuthor, CommentAuthor, CommentMenu, SingleComment } from './Comment.styles'
import { useSelector } from 'react-redux'

function CommentSection() {
  // const [comments, setComments] = useState([])
  const { commentTexts } = useSelector((state) => state.comment)

  // let allComments = Array.from(commentTexts)

  return (
    <CommentMenu>
      {commentTexts.map((comm, index) => (
        <CommentAndAuthor key={index}>
          <CommentAuthor> User: </CommentAuthor>
          <SingleComment> {comm} </SingleComment>
        </CommentAndAuthor>
      ))}
    </CommentMenu>
  )
}

export default CommentSection
