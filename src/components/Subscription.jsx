import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { useEffect, useState } from 'react'
import SubscribedCard from './SubscribedCard'
import { Link } from 'react-router-dom'

const Subscription = () => {
   //state
   const [videos, setVideos] = useState([])

   //behavior
   const key = 'AIzaSyAjYZj_Ga7caIIP_HlQ3Qi5HmgPTG1LGVI'
   const fecthData = `https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&maxResults=33&mine=true&key=${key}`
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
   return (
      <div>
         <Navbar />
         <Sidebar />
         <div>
            <div className="grid_sidebar_searchbar">
               <div className="main_side">
                  <div className="image__preview image__container">
                     {videos.map((item, id) => (
                        <Link
                           className="video__link__style"
                           to={`/videoplay/${item.id}`}
                           key={id}
                        >
                           <SubscribedCard key={id} video={item} />
                        </Link>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Subscription
