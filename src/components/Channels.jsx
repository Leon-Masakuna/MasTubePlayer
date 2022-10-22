import React from 'react'
// import Sidebar from './Sidebar'
import { useEffect, useState } from 'react'
import ChannelCard from './ChannelCard'
import { Link, useNavigate } from 'react-router-dom'

const Channels = () => {
   //state
   const [videos, setVideos] = useState([])

   //behavior
   const key = 'AIzaSyAjYZj_Ga7caIIP_HlQ3Qi5HmgPTG1LGVI'
   const fecthData = `https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&maxResults=45&mine=true&key=${key}`
   const accessToken = localStorage.getItem('token')
   console.log('Main component : ', accessToken)
   const navigate = useNavigate()

   useEffect(() => {
      fetch(fecthData, {
         method: 'GET',
         headers: new Headers({ Authorization: `Bearer ${accessToken}` }),
      })
         .then((res) => res.json())
         .then((data) => setVideos(data.items))
   }, [])

   console.log('videos abonnées : ', videos)

   useEffect(() => {
      if (!accessToken) {
         navigate('/')
      }
   }, [accessToken, navigate])

   return (
      <>
         <div>
            <div>
               <div className="grid_sidebar_searchbar">
                  <div className="main_side">
                     <div className="image__preview image__container">
                        {videos.map((item, id) => {
                           const channelId = item.snippet.resourceId.channelId
                           return (
                              <Link
                                 className="video__link__style"
                                 to={`/chanelVideosPage/${channelId}`}
                                 /* to={`/videoplay/${item.id}`} */
                                 key={id}
                              >
                                 <ChannelCard key={id} video={item} />
                              </Link>
                           )
                        })}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Channels
