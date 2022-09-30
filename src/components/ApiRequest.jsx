import React from 'react'
import { useState, useEffect } from 'react'
import Card from './Card'
import Sidebar from './Sidebar'
import '../styles/apirequest_style.css'
import Searchbar from './Searchbar'

const ApiRequest = () => {
   //state
   const [videos, setVideos] = useState([])

   //behavior
   const fetchData = ''

   //render
   return (
      <>
         <div className="grid_sidebar_searchbar">
            <Sidebar />
            <div className="main_side">
               <Searchbar />
               <Card />
            </div>
         </div>
      </>
   )
}

export default ApiRequest
