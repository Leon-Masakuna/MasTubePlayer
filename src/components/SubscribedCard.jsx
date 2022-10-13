import React from 'react'

const SubscribedCard = ({ video }) => {
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
               {/*<div className="channel__logo__title">
                   <img
                     src={video?.snippet?.thumbnails?.standard?.url}
                     alt="chanel image"
                  />
                  <p>{video?.snippet?.channelTitle}</p> 
               </div>*/}
            </div>
         </div>
      </div>
   )
}

export default SubscribedCard
