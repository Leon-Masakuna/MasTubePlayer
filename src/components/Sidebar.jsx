import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/sidebar_style.css'
/* import Logout from './Logout' */

const Sidebar = () => {
   return (
      <div className="sidebar">
         <div className="sidebar__logout">
            <div>
               <Link className="sidebar__submission" to={'/dashbord'}>
                  <h3 className="sidebar__sub home__bg home__margin home__title">
                     Home
                  </h3>
               </Link>
               <Link className="sidebar__submission" to={'/SubscribedVideos'}>
                  <h3 className="sidebar__sub home__bg sub__title">
                     Subscription
                  </h3>
               </Link>
            </div>
            {/* <div>
               <Logout />
            </div> */}
         </div>
      </div>
   )
}

export default Sidebar
