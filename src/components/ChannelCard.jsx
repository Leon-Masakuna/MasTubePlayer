import React from 'react'

const ChannelCard = ({ video }) => {
   return (
      <div>
         <div className="image_space">
            <div className="channel__card__items">
               <img
                  className="image"
                  src={video.snippet.thumbnails.medium.url}
                  alt="image video"
               />
               <p className="video__title">{video.snippet.title}</p>
            </div>
         </div>
      </div>
   )
}

export default ChannelCard
