import React, { useEffect, useState } from 'react'
import {
  CommentAndAuthor,
  CommentAuthor,
  CommentHeader,
  CommentMenu,
  CommentUserPhoto,
  SingleComment
} from './Comment.styles'
import { useDispatch, useSelector } from 'react-redux'
import authService from '../../services/authService'

function CommentSection() {
  // const { commentTexts } = useSelector((state) => state.comment)
  const { displayName, photo } = useSelector((state) => state.user)

  const [commentTexts, setCommentTexts] = useState([]);
  const login = useSelector((state) => state.user.username);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await authService.getUserComments(login);
        const { comments } = response.data;
        setCommentTexts(comments);
      } catch (error) {
        console.error('Failed to fetch comments:', error);
      }
    };

    fetchData();
  }, [login]);

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
          <CommentAuthor> {displayName}: </CommentAuthor>
          <SingleComment> {comm} </SingleComment>
        </CommentAndAuthor>
      ))}
    </CommentMenu>
  )
}

export default CommentSection
