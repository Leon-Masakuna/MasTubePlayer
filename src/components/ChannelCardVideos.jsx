import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { useState, useEffect } from 'react'
import Card from './Card'

const ChannelCardVideos = () => {
   //state
   const [video, setVideo] = useState([])
   const { channelId } = useParams()

   //behavior
   const key = 'AIzaSyAjYZj_Ga7caIIP_HlQ3Qi5HmgPTG1LGVI'
   const fecthData = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&maxResults=45&key=${key}`
   const accessToken = localStorage.getItem('token')
   console.log('Main component : ', accessToken)

   useEffect(() => {
      fetch(fecthData, {
         method: 'GET',
         headers: new Headers({ Authorization: `Bearer ${accessToken}` }),
      })
         .then((res) => res.json())
         .then((data) => setVideo(data.items))
   }, [])

   console.log('videos abonnées : ', video)
   return (
      <div>
         <Navbar />
         <Sidebar />
         <div>
            <div className="grid_sidebar_searchbar">
               <div className="main_side">
                  <div className="image__preview image__container">
                     {video.map(
                        (item, id) => (
                           /*  {
                        const videoId = item.id.videoId
                        return  */ <Link
                              className="video__link__style"
                              to={`/chanelCardVideos/${item.id.videoId}`}
                              key={id}
                           >
                              <Card key={id} video={item} />
                           </Link>
                        )
                        /* } */
                     )}
                     {/* <div>
                        <h1>Affichage videos de la chaine choisie</h1>
                     </div> */}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ChannelCardVideos
