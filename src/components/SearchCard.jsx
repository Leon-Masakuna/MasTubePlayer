import React from 'react'
import '../styles/card_style.css'
import numeral from 'numeral'
import moment from 'moment/moment'

const SearchCard = ({ video }) => {
   const title = video.snippet.title
   const videoTitle = title.replace(/&#39;/, "'")

   return (
      <div>
         <div className="image_space">
            <div className="card__items">
               <img
                  className="image"
                  src={video.snippet.thumbnails.medium.url}
                  alt="image video"
               />
               <p className="video__title">{videoTitle}</p>
               <p className="video__title channel__title">
                  {video.snippet.channelTitle}
               </p>
               <div className="video__info">
                  <div className="comment__info">
                     published : {moment(video.snippet.publishedAt).fromNow()}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default SearchCard
