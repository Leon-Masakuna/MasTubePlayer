import React from 'react'
import '../styles/searchPage_style.css'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Card from './Card'
import { useNavigate } from 'react-router-dom'

const SearchPage = () => {
   const navigate = useNavigate()
   const { searchWord } = useParams()
   const [videoFound, setVideoFound] = useState([])
   const key = 'AIzaSyAjYZj_Ga7caIIP_HlQ3Qi5HmgPTG1LGVI'
   const accessToken = localStorage.getItem('token')

   const fectData = () => {
      axios
         .get(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=60&type=video&q=${searchWord}&safeSearch=none&key=${key}`
         )
         .then((response) => {
            setVideoFound(response.data.items)
         })
         .catch((error) => console.log(error))
   }

   useEffect(() => {
      fectData()
   }, [searchWord])

   useEffect(() => {
      if (!accessToken) {
         navigate('/')
      }
   }, [accessToken, navigate])

   return (
      <div>
         <div className="grid_sidebar_searchbar">
            <div className="main_side">
               <div className="image__preview image__container">
                  {videoFound.map(
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
               </div>
            </div>
         </div>
      </div>
   )
}

export default SearchPage
