import React from 'react'
import { useState, useEffect } from 'react'
import Card from './Card'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/main_style.css'
import '../styles/card_style.css'
import Loader from './Loader'
import ErrorPage from './ErrorPage'

const Main = () => {
   //state
   const [videos, setVideos] = useState([])
   const navigate = useNavigate()
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(false)

   //behavior
   const key = import.meta.env.VITE_YOUTUBE_API_KEY

   const fecthData = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=48&regionCode=FR&key=${key}`

   const accessToken = localStorage.getItem('token')

   useEffect(() => {
      fetch(fecthData, {
         method: 'GET',
         headers: new Headers({ Authorization: `Bearer ${accessToken}` }),
      })
         .then((res) => res.json())
         .then((data) => {
            setVideos(data.items)
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

   console.log('erreur : ', error)
   //render
   return (
      <>
         <div className="grid_sidebar_searchbar">
            <div className="main_side">
               <div className="image__preview image__container">
                  {loading ? (
                     <Loader />
                  ) : videos ? (
                     videos.map((item, id) => (
                        <Link
                           className="video__link__style"
                           to={`/videoplay/${item.id}/${item.snippet.channelId}`}
                           key={id}
                        >
                           <Card key={id} video={item} />
                        </Link>
                     ))
                  ) : (
                     <ErrorPage />
                  )}
               </div>
            </div>
         </div>
      </>
   )
}

export default Main
