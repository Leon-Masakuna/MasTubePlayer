import React from 'react'
import '../styles/login_style.css'
import { GoogleLogout } from 'react-google-login'
import { useNavigate } from 'react-router-dom'
import { render } from '@testing-library/react'

const clientId = import.meta.env.VITE_YOUTUBE_CLIENT_ID

const Logout = () => {
   const navigate = useNavigate()
   const onSucces = () => {
      console.log('Logout Successfully')
      navigate('/')
      localStorage.removeItem('item')
      localStorage.removeItem('token')
   }
   return (
      <div className="logout__container">
         <div className="logout__ui">
            <GoogleLogout
               className="logout__ui"
               clientId={clientId}
               render={(renderProps) => (
                  <button
                     className="btn-logout"
                     onClick={renderProps.onClick}
                     disabled={renderProps.disabled}
                  >
                     <i className="fa-solid fa-right-from-bracket google-logout-icon"></i>{' '}
                     <span className="logout__text">Logout</span>
                  </button>
               )}
               buttonText={'Logout'}
               onLogoutSuccess={onSucces}
            />
         </div>
      </div>
   )
}

export default Logout
