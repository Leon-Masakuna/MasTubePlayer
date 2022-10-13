import React from 'react'
import { useState, useEffect } from 'react'
import Card from './Card'
import Sidebar from './Sidebar'
import '../styles/main_style.css'
import '../styles/card_style.css'

const Main = () => {
   //state
   const [videos, setVideos] = useState([])

   //behavior
   const key = 'AIzaSyAjYZj_Ga7caIIP_HlQ3Qi5HmgPTG1LGVI'
   /* const fecthData = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&maxResults=25&key=${key}` */

   const accessToken = localStorage.getItem('token')
   console.log('Main component : ', accessToken)

   /* useEffect(() => {
      fetch(fecthData)
         .then((response) => response.json())
         .then((data) => setVideos(data.items))
   }, []) */

   useEffect(() => {
      fetch(
         `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&key=${key}`,
         {
            method: 'GET',
            headers: new Headers({ Authorization: `Bearer ${accessToken}` }),
         }
      )
         .then((res) => res.json())
         .then((data) => {
            console.log(data)
            setVideos(data.items)
         })
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
                     <Card key={id} video={item} />
                  ))}
               </div>
            </div>
         </div>
      </>
   )
}

export default Main
