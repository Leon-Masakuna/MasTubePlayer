import React from 'react'
import '../styles/card_style.css'
import moment from 'moment/moment'
import ShowMoreText from 'react-show-more-text'

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
               <ShowMoreText
                  className="video__title"
                  lines={2}
                  more=""
                  less="Show less"
                  anchorClass="show-more-less-clickable"
                  expanded={false}
                  truncatedEndingComponent={'...'}
               >
                  <p className="video__title">{videoTitle}</p>
               </ShowMoreText>
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
