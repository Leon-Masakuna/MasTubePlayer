import React from 'react'
import { useState, useEffect } from 'react'
import Card from './Card'
import Sidebar from './Sidebar'
import '../styles/apirequest_style.css'

const ApiRequest = () => {
   //state
   const [videos, setVideos] = useState([])

   //behavior
   const fetchData = () => {
      fetch(
         'https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=the%20weekend&key=AIzaSyCT_DYpx3DmLUBXZR0vuFpITrs2jRNcNCo'
      )
         .then((data) => data.json())
         .then((video) => {
            setUsers(video)
         })

      console.log(fetchData)
   }

   //render
   return (
      <>
         <div className="grid_sidebar_searchbar">
            <Sidebar />
            <div className="main_side">
               <Card />
            </div>
         </div>
      </>
   )
}

export default ApiRequest
