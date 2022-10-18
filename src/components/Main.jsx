import React from 'react'
import { useState, useEffect } from 'react'
import Card from './Card'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'
import '../styles/main_style.css'
import '../styles/card_style.css'

const Main = () => {
   //state
   const [videos, setVideos] = useState([])

   //behavior
   const key = 'AIzaSyAjYZj_Ga7caIIP_HlQ3Qi5HmgPTG1LGVI'
   const fecthData = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=75&myRating=like&key=${key}`

   const accessToken = localStorage.getItem('token')
   console.log('Main component : ', accessToken)

   useEffect(() => {
      fetch(fecthData, {
         method: 'GET',
         headers: new Headers({ Authorization: `Bearer ${accessToken}` }),
      })
         .then((res) => res.json())
         .then((data) => setVideos(data.items))
   }, [])

   console.log(videos)
   //render
   return (
      <>
         <div className="grid_sidebar_searchbar">
            <Sidebar />
            <div className="main_side">
               <div className="image__preview image__container">
                  {videos.map((item, id) => (
                     <Link
                        className="video__link__style"
                        to={`/videoplay/${item.id}`}
                        key={id}
                     >
                        <Card key={id} video={item} />
                     </Link>
                  ))}
               </div>
            </div>
         </div>
      </>
   )
}

export default Main
