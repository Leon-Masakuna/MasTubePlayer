import React from 'react'
/* import logo from '../assets/tubePlayer.jpg' */
import '../styles/navbar_style.css'
import '../styles/sidebar_style.css'
import Searchbar from './Searchbar'
import Logout from './Logout'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
   const profileImage = localStorage.getItem('item')
   /* const profileName = localStorage.getItem('itemName') */
   console.log(profileImage)

   return (
      <>
         <nav>
            <div className="navbar__logo__name">
               {/* <img src={logo} className="nav--logo" alt="logo" /> */}
               <i className="fa-brands fa-youtube nav--logo"></i>
               <p className="navbar__site__title">MasTubePlayer</p>
            </div>
            <div className="navigation">
               <NavLink
                  className="sidebar__submission is__active"
                  to={'/dashbord'}
               >
                  <h3 className="sidebar__sub home__bg home__margin home__title">
                     <i className="fa-solid fa-house"></i> {' Home'}
                  </h3>
                  <h3 className="home__icon">
                     <i className="fa-solid fa-house"></i>
                  </h3>
               </NavLink>
               <NavLink
                  className="sidebar__submission is__active"
                  to={'/channelPage'}
               >
                  <h3 className="sidebar__sub home__bg sub__title">
                     <i className="fa-brands fa-youtube"></i>
                     {' Subscription'}
                  </h3>
                  <h3 className="sub__icon">
                     <i className="fa-brands fa-youtube"></i>
                  </h3>
               </NavLink>
            </div>
            <Searchbar />
            <div className="navbar__logo__sign__up">
               <div>
                  <Logout />
               </div>
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
