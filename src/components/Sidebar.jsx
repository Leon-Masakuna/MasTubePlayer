import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../styles/sidebar_style.css'
/* import Logout from './Logout' */

const Sidebar = () => {
   return (
      <div className="sidebar">
         <div className="sidebar__logout">
            <div>
               <NavLink
                  className="sidebar__submission is__active"
                  to={'/dashbord'}
               >
                  <h3 className="sidebar__sub home__bg home__margin home__title">
                     <i className="fa-solid fa-house"></i> {' Home'}
                  </h3>
                  <h3 className="home__icon">
                     Mfeng
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
                     Maskuna
                     <i className="fa-brands fa-youtube"></i>
                  </h3>
               </NavLink>
            </div>
         </div>
      </div>
   )
}

export default Sidebar
