import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import '../styles/videoLecture_style.css'

const VideoLecture = (video) => {
   const { id } = useParams()
   console.log(id)
   return (
      <div>
         <Navbar />
         <Sidebar />
         <div className="video__lecture">
            <iframe
               width="560"
               height="315"
               src={`https://www.youtube.com/embed/${id}`}
               title="YouTube video player"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
               /* allowfullscreen */
            ></iframe>
            {/* <p className="video__title">{video?.snippet?.title}</p>
            <p>{video?.snippet?.channelTitle}</p> */}
         </div>
      </div>
   )
}

export default VideoLecture
