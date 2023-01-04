import socketIO from 'socket.io-client'
import React, { useState, useEffect } from 'react'

const socket = socketIO.connect('http://localhost:8100')
const Like = ({ comment }) => {
   const [likeCounts, setLikeCounts] = useState([])

   const Likes = likeCounts.filter(
      (likeCount) => likeCount.commentId === comment._id
   )

   const getLikes = () => {
      socket.emit('getLikes', {})
   }
   //    console.log('likes : ', comment)

   useEffect(() => {
      getLikes()
      socket.on('receiveLikes', (like) => {
         setLikeCounts(like)
      })
      socket.on('likeResponse', (like) => setLikeCounts([like, ...likeCounts]))
   }, [socket, likeCounts])

   const addLike = () => {
      socket.emit('likeSend', {
         commentId: comment._id,
         userId: localStorage.getItem('userId'),
      })
   }

   return (
      <div>
         <i className="fa-solid fa-thumbs-up" onClick={addLike}></i>
         <span> {Likes.length} </span>
      </div>
   )
}

export default Like
