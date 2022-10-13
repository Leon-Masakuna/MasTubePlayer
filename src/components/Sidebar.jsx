import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/sidebar_style.css'
import Logout from './Logout'

const Sidebar = () => {
   return (
      <div className="sidebar">
         <div className="sidebar__logout">
            <div>
               <Link className="sidebar__submission" to={'/dashbord'}>
                  <h3 className="sidebar__sub">Home</h3>
               </Link>
               <Link className="sidebar__submission" to={'/dashbord'}>
                  <h3 className="sidebar__sub">Submission</h3>
               </Link>
            </div>
            <div>
               <Logout />
            </div>
         </div>
      </div>
   )
}

export default Sidebar
