import React, { useState } from 'react'

const Like = () => {
   const [likeCount, setLikeCount] = useState(0)
   const addLike = () => {
      setLikeCount(likeCount + 1)
   }
   return (
      <div>
         <i className="fa-solid fa-thumbs-up" onClick={addLike}></i>
         <span> {likeCount} </span>
      </div>
   )
}

export default Like
