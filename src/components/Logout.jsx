import React from 'react'
import '../styles/login_style.css'
import { GoogleLogin, GoogleLogout } from 'react-google-login'

const clientId =
   '207208175376-74k3vacevfg0a05ju6tuld9ejsogvpm9.apps.googleusercontent.com'

const Logout = () => {
   const onSucces = () => {
      console.log('Logout Successfully')
   }
   return (
      <div className="login__container">
         <div className="login__ui">
            <GoogleLogout
               clientId={clientId}
               buttonText={'Logout to disconnect your account'}
               onLogoutSuccess={onSucces}
            />
         </div>
      </div>
   )
}

export default Logout
