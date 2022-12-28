import React, { useState } from 'react'

const Dislike = () => {
   const [dislikeCount, setDislikeCount] = useState(0)
   const addDislike = () => {
      setDislikeCount(dislikeCount + 1)
   }
   return (
      <div>
         <i className="fa-solid fa-thumbs-down" onClick={addDislike}></i>
         <span> {dislikeCount} </span>
      </div>
   )
}

export default Dislike
