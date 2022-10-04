import React from 'react'
import '../styles/login_style.css'
import { GoogleLogin } from 'react-google-login'

const Login = () => {
   const clientId =
      '207208175376-74k3vacevfg0a05ju6tuld9ejsogvpm9.apps.googleusercontent.com'

   const onSucces = (res) => {
      console.log('LOGIN success! Current user: ', res.profileObj)
   }

   const onFaillure = (res) => {
      console.log('LOGIN FAILLURE! res:', res)
   }

   const title = 'Connexion'
   const accessPhrase = 'Accéder à MasTubePlayer'

   return (
      <div className="login__container">
         <div className="login__ui">
            {/* <h2 className="login__title">{title}</h2>
               <h4 className="login__phrase">{accessPhrase}</h4>
               <form action="">
               <div className="login__inputs">
                  <div>
                     <input
                        type="email"
                        name=""
                        placeholder="Adresse e-mail"
                        required
                     />
                  </div>
                  <div>
                     <input
                        type="password"
                        name=""
                        placeholder="Mot de passe"
                        required
                     />
                  </div>
               </div>
               <div>
                  <button className="login__button">Se Connecter</button>
               </div>
            </form> */}

            <GoogleLogin
               clientId={clientId}
               buttonText="Login with google account"
               onSuccess={onSucces}
               onFailure={onFaillure}
               cookiePolicy={'single_host_origin'}
               isSignedIn={true}
            />
         </div>
      </div>
   )
}

export default Login
