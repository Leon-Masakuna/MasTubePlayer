import React from 'react'
import '../styles/loader_style.css'
import logo from '../assets/loading-1.webp'

const Loader = () => {
   return (
      <div className="position-load">
         <img className="logo__loader" src={logo} />
      </div>
   )
}

export default Loader
