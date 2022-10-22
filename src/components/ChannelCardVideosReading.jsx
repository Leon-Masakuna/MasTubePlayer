import React, { useEffect } from 'react'
import Navbar from './Navbar'
/* import Sidebar from './Sidebar' */
import { useParams, useNavigate } from 'react-router-dom'

const ChannelCardVideosReading = () => {
   const { videoId } = useParams()
   console.log(videoId)

   //Behavior
   //When disconnecting, no way to reaccess the app without access token (authentifying again)
   const accessToken = localStorage.getItem('token')
   const navigate = useNavigate()

   useEffect(() => {
      if (!accessToken) {
         navigate('/')
      }
   }, [accessToken, navigate])

   return (
      <div>
         <Navbar />
         <div className="video__lecture" /* key={videos.id} */>
            <iframe
               width="560"
               height="315"
               src={`https://www.youtube.com/embed/${videoId}`}
               title="YouTube video player"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
               /* allowfullscreen */
            ></iframe>
            {/* <p className="video__title">{videos?.snippet?.title}</p>
            <p>{videos?.snippet?.channelTitle}</p> */}
         </div>
      </div>
   )
}

export default ChannelCardVideosReading
