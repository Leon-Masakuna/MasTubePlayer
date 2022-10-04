import React from 'react'
import logo from '../assets/tubePlayer.jpg'
import '../styles/navbar_style.css'
import Searchbar from './Searchbar'

const Navbar = () => {
   return (
      <>
         <nav>
            <div className="navbar__logo__name">
               <img src={logo} className="nav--logo" alt="logo" />
               <p className="navbar__site__title">MasTubePlayer</p>
            </div>
            <Searchbar />
            <div className="navbar__logo__sign__up">
               <div className="empty__space"></div>
            </div>
         </nav>
      </>
   )
}

export default Navbar
