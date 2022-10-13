import React from 'react'
import '../styles/login_style.css'
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import { useNavigate } from 'react-router-dom'

const clientId =
   '207208175376-74k3vacevfg0a05ju6tuld9ejsogvpm9.apps.googleusercontent.com'

const Logout = () => {
   const navigate = useNavigate()
   const onSucces = () => {
      console.log('Logout Successfully')
      navigate('/')
   }
   return (
      <div className="logout__container">
         <div className="logout__ui">
            <GoogleLogout
               clientId={clientId}
               buttonText={'Logout'}
               onLogoutSuccess={onSucces}
            />
         </div>
      </div>
   )
}

export default Logout
