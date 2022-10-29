import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
// import Sidebar from './Sidebar'
import { useState, useEffect } from 'react'
import ErrorPage from './ErrorPage'
import Loader from './Loader'
import SearchCard from './SearchCard'

const ChannelVideos = () => {
   //state
   const [video, setVideo] = useState([])
   const { channelId } = useParams()
   const navigate = useNavigate()
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(false)

   //behavior
   const key = import.meta.env.VITE_YOUTUBE_API_KEY
   const fecthData = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&maxResults=45&key=${key}`
   const accessToken = localStorage.getItem('token')

   useEffect(() => {
      fetch(fecthData, {
         method: 'GET',
         headers: new Headers({ Authorization: `Bearer ${accessToken}` }),
      })
         .then((res) => res.json())
         .then((data) => {
            setVideo(data.items)
            setLoading(false)
         })
         .catch(() => setError(true))
   }, [accessToken])

   useEffect(() => {
      if (!accessToken) {
         navigate('/')
      }
   }, [accessToken, navigate])

   useEffect(() => {
      if (error) {
         return <ErrorPage />
      }
   }, [accessToken])

   console.log('channels videos : ', video)

   return (
      <div>
         <div>
            <div className="grid_sidebar_searchbar">
               <div className="main_side">
                  <div className="image__preview image__container">
                     {loading ? (
                        <Loader />
                     ) : video ? (
                        video.map((item, id) => (
                           <Link
                              className="video__link__style"
                              to={`/videoplay/${item.id.videoId}/${item.snippet.channelId}`}
                              key={id}
                           >
                              <SearchCard key={id} video={item} />
                           </Link>
                        ))
                     ) : (
                        <ErrorPage />
                     )}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ChannelVideos
