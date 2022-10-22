import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
/* import { useEffect, useState } from 'react' */
import '../styles/MainVideoReading_style.css'

const MainVideoReading = () => {
   //States
   const { id } = useParams()

   //Behavior
   const accessToken = localStorage.getItem('token')
   const navigate = useNavigate()

   useEffect(() => {
      if (!accessToken) {
         navigate('/')
      }
   }, [accessToken, navigate])

   console.log(id)
   return (
      <div>
         <div className="video__lecture" /* key={videos.id} */>
            <iframe
               width="560"
               height="315"
               src={`https://www.youtube.com/embed/${id}`}
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

export default MainVideoReading
