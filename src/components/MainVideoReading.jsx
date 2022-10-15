import React from 'react'
import { useParams } from 'react-router-dom'
/* import { useEffect, useState } from 'react' */
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import '../styles/MainVideoReading_style.css'

const MainVideoReading = (video) => {
   //States
   const { id } = useParams()
   console.log(id)
   /* const [videos, setVideos] = useState([])

   //behavior
   const key = 'AIzaSyAjYZj_Ga7caIIP_HlQ3Qi5HmgPTG1LGVI'
   const fecthData = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&key=${key}`

   const accessToken = localStorage.getItem('token')
   console.log('Main component : ', accessToken)

   useEffect(() => {
      fetch(fecthData, {
         method: 'GET',
         headers: new Headers({ Authorization: `Bearer ${accessToken}` }),
      })
         .then((res) => res.json())
         .then((data) => {
            data.map((item) => {
               if (item.id == id) {
                  setVideos(item)
               }
            })
         })
   }, [])

   console.log(videos)
 */
   return (
      <div>
         <Navbar />
         <Sidebar />
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
