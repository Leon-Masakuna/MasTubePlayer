import React from 'react'
import { GoogleLogin } from 'react-google-login'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import '../styles/login_style.css'

const Login = () => {
   const clientId =
      '207208175376-74k3vacevfg0a05ju6tuld9ejsogvpm9.apps.googleusercontent.com'

   const navigate = useNavigate()
   const onSucces = (res) => {
      /* console.log('LOGIN success! Current user: ', res)
      console.log(res.profileObj['imageUrl'])

      console.log('Access Token : ', res.accessToken) */

      const profilePicture = res.profileObj['imageUrl']
      localStorage.setItem('item', profilePicture)
      /* const profileGivenName = res.profileObj['givenName']
      localStorage.setItem('itemName', profileGivenName)*/
      const accessToken = res.accessToken
      localStorage.setItem('token', accessToken)

      /* console.log('accessToken : ', accessToken) */

      navigate('/dashbord')
   }

   const onFaillure = (res) => {
      console.log('LOGIN FAILLURE! res:', res)
   }

   const title = 'Connexion'
   const accessPhrase = 'Accéder à MasTubePlayer'

   return (
      <div className="login__container">
         <div className="login__ui">
            <h2 className="login__title">{title}</h2>
            <h4 className="login__phrase">{accessPhrase}</h4>

            <Link className="link__decoration" to={'/dashbord'}>
               <GoogleLogin
                  clientId={clientId}
                  buttonText="Login with google account and watch your videos"
                  onSuccess={onSucces}
                  onFailure={onFaillure}
                  cookiePolicy={'single_host_origin'}
                  isSignedIn={false}
                  scope="https://www.googleapis.com/auth/youtube"
               />
            </Link>
         </div>
      </div>
   )
}

export default Login
