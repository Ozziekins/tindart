import React from 'react'
import {
  CommentAndAuthor,
  CommentAuthor,
  CommentHeader,
  CommentMenu,
  CommentUserPhoto,
  SingleComment
} from './Comment.styles'
import { useSelector } from 'react-redux'

function CommentSection() {
  const { commentTexts } = useSelector((state) => state.comment)
  const { username, photo } = useSelector((state) => state.user)

  return (
    <CommentMenu>
      <CommentHeader>Comments</CommentHeader>
      {commentTexts.map((comm, index) => (
        <CommentAndAuthor key={index}>
          <CommentUserPhoto
            style={{
              backgroundImage: 'url(' + photo + ')',
              backgroundSize: '20px',
              objectFit: 'contain'
            }}
          />
          <CommentAuthor> {username}: </CommentAuthor>
          <SingleComment> {comm} </SingleComment>
        </CommentAndAuthor>
      ))}
    </CommentMenu>
  )
}

export default CommentSection
