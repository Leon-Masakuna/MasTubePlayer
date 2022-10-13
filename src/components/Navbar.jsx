import React from 'react'
import logo from '../assets/tubePlayer.jpg'
import '../styles/navbar_style.css'
import Searchbar from './Searchbar'

const Navbar = () => {
   const profileImage = localStorage.getItem('item')
   const profileName = localStorage.getItem('itemName')

   return (
      <>
         <nav>
            <div className="navbar__logo__name">
               <img src={logo} className="nav--logo" alt="logo" />
               <p className="navbar__site__title">MasTubePlayer</p>
            </div>
            <Searchbar />
            <div className="navbar__logo__sign__up">
               <div className="empty__space">
                  <img className="profile__picture" src={profileImage} alt="" />
                  {/* <span>{profileName}</span> */}
               </div>
            </div>
         </nav>
      </>
   )
}

export default Navbar
