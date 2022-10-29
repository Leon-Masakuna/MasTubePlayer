import React from 'react'
import '../styles/card_style.css'
import moment from 'moment/moment'
import ShowMoreText from 'react-show-more-text'
import { Link } from 'react-router-dom'

const SearchCard = ({ video }) => {
   const title = video.snippet.title
   const videoTitle = title.replace(/&#39;/, "'")
   const channelId = video.snippet.channelId

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
               <Link
                  className="channel__linked"
                  to={`/chanelVideosPage/${channelId}`}
               >
                  <p className="video__title channel__title">
                     {video.snippet.channelTitle}
                  </p>
               </Link>
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
