import React from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Card from './Card'
import { useNavigate } from 'react-router-dom'
import Loader from './Loader'

const SearchPage = () => {
   const navigate = useNavigate()
   const { searchWord } = useParams()
   const [videoFound, setVideoFound] = useState([])
   const key = import.meta.env.VITE_YOUTUBE_API_KEY
   const accessToken = localStorage.getItem('token')
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(false)

   const fectData = () => {
      axios
         .get(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=60&type=video&q=${searchWord}&safeSearch=none&key=${key}`
         )
         .then((response) => {
            setVideoFound(response.data.items)
            setLoading(false)
         })
         .catch(() => setError(true))
   }

   useEffect(() => {
      fectData()
   }, [searchWord, accessToken])

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

   return (
      <div>
         <div className="grid_sidebar_searchbar">
            <div className="main_side">
               <div className="image__preview image__container">
                  {!loading ? (
                     videoFound?.map((item, id) => (
                        <Link
                           className="video__link__style"
                           to={`/videoplay/${item.id.videoId}/${item.snippet.channelId}`}
                           key={id}
                        >
                           <Card key={id} video={item} />
                        </Link>
                     ))
                  ) : (
                     <Loader />
                  )}
               </div>
            </div>
         </div>
      </div>
   )
}

export default SearchPage
