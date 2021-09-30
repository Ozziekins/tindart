import React from 'react'
import { CommentAndAuthor, CommentAuthor, CommentHeader, CommentMenu, SingleComment } from './Comment.styles'
import { useSelector } from 'react-redux'

function CommentSection() {
  const { commentTexts } = useSelector((state) => state.comment)

  return (
    <CommentMenu>
      <CommentHeader>Comments</CommentHeader>
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
