import React from 'react'
import '../styles/card_style.css'

const Card = ({ video }) => {
   const chanelImage = localStorage.getItem('item')

   return (
      <div>
         <div className="image_space">
            <div className="card__items">
               <img
                  className="image"
                  src={video?.snippet?.thumbnails?.medium?.url}
                  alt="image video"
               />
               <p className="video__title">{video?.snippet?.title}</p>
            </div>
         </div>
      </div>
   )
}

export default Card
