import React from 'react'
import '../styles/navbar_style.css'
import '../styles/sidebar_style.css'
import Searchbar from './Searchbar'
import Logout from './Logout'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Navbar = () => {
   const profileImage = localStorage.getItem('imageUrl')
   const appName = 'MasTubePlayer'

   return (
      <>
         <nav>
            <Link to={'/dashbord'} className="link">
               <div className="navbar__logo__name">
                  <i className="fa-brands fa-youtube nav--logo"></i>
                  <p className="navbar__site__title">{appName}</p>
               </div>
            </Link>
            <div className="navigation">
               <NavLink
                  className={(nav) =>
                     nav.isActive ? 'is__active' : 'not__active'
                  }
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
                  className={(nav) =>
                     nav.isActive ? 'is__active' : 'not__active'
                  }
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
               {/*  <div className="logout__component">
                  <Logout />
               </div> */}
               <Link to={`/userprofile/${localStorage.getItem('userId')}`}>
                  <div className="empty__space">
                     <img
                        className="profile__picture"
                        src={profileImage}
                        alt=""
                     />
                  </div>
               </Link>
            </div>
         </nav>
      </>
   )
}

export default Navbar
