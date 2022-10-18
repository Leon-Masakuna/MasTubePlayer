import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/sidebar_style.css'
/* import Logout from './Logout' */

const Sidebar = () => {
   return (
      <div className="sidebar">
         <div className="sidebar__logout">
            <div>
               <Link
                  className="sidebar__submission is__active"
                  to={'/dashbord'}
               >
                  <h3 className="sidebar__sub home__bg home__margin home__title">
                     <i className="fa-solid fa-house"></i> {' Home'}
                  </h3>
               </Link>
               <Link
                  className="sidebar__submission is__active"
                  to={'/channelPage'}
               >
                  <h3 className="sidebar__sub home__bg sub__title">
                     <i className="fa-brands fa-youtube"></i>
                     {' Subscription'}
                  </h3>
               </Link>
            </div>
         </div>
      </div>
   )
}

export default Sidebar
