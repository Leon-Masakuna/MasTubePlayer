import React from 'react'
import '../styles/loader_style.css'
import logo from '../assets/loader_component.gif'

const Loader = () => {
   return (
      <div className="position-load">
         <img className="logo__loader" src={logo} />
      </div>
   )
}

export default Loader
