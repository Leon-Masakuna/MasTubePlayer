import React from 'react'
import { useState, useEffect } from 'react'
import '../styles/videoReading_style.css'
import CommentForm from './CommentForm'
import Comment from './Comment'
import axios from 'axios'

const Comments = ({ currentUserId }) => {
   const [backendComments, setBackendComments] = useState([])
   const [activeComment, setActiveComment] = useState(null)

   const [userData, setUserData] = useState([])
   const rootComments = backendComments
      .filter((backendComment) => backendComment.parentComment === null)
      .sort(
         (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )

   const getReplies = (commentId) => {
      return backendComments
         .filter((backendComment) => backendComment.parentComment === commentId)
         .sort(
            (a, b) =>
               new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
         )
   }

   const addComment = (text, parentComment) => {
      console.log('addComment', text, parentComment)
      axios
         .post('http://localhost:8100/api/comment', {
            message: text,
            videoId: '1980431',
            userId: localStorage.getItem('userId'),
            parentComment: parentComment,
         })
         .then((comment) => {
            setBackendComments([comment, ...backendComments])
         })
      setActiveComment(null)
   }

   const fecthData = `http://localhost:8100/api/comment`
   const fetchUser = 'http://localhost:8100/api/user/'

   useEffect(() => {
      fetch(fecthData, {
         method: 'GET',
      })
         .then((res) => res.json())
         .then((data) => setBackendComments(data))

      fetch(fetchUser, {
         method: 'GET',
      })
         .then((res) => res.json())
         .then((data) => setUserData(data))
   }, [])

   console.log('Backend Comments : ', backendComments)
   console.log('Backend Users : ', userData)

   return (
      <div>
         <div className="comment-part">
            <div className="comments">{'8 Comments'}</div>
            <div className="filter">
               <i className="fa-solid fa-filter"></i> {'Filter comments'}
            </div>
         </div>
         <div className="comment-edit">
            <div>
               <img
                  src={localStorage.getItem('imageUrl')}
                  alt="Léon Mfeng"
                  className="profile-picture"
               />
            </div>
            <CommentForm submitLabel="Send Comment" handleSubmit={addComment} />
         </div>
         {rootComments.map((rootComment) => (
            <Comment
               key={rootComment._id}
               comment={rootComment}
               replies={getReplies(rootComment._id)}
               currentUserId={currentUserId}
               activeComment={activeComment}
               setActiveComment={setActiveComment}
               addComment={addComment}
            />
         ))}
      </div>
   )
}

export default Comments
