import React, { useEffect } from 'react'
import { GoogleLogin } from 'react-google-login'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import '../styles/login_style.css'
import { render } from '@testing-library/react'

const Login = () => {
   const clientId = import.meta.env.VITE_YOUTUBE_CLIENT_ID

   const navigate = useNavigate()
   const onSucces = (res) => {
      const profilePicture = res.profileObj['imageUrl']
      localStorage.setItem('item', profilePicture)
      const accessToken = res.accessToken
      localStorage.setItem('token', accessToken)

      navigate('/dashbord')
   }

   const accessToken = localStorage.getItem('token')

   useEffect(() => {
      if (!accessToken) {
         navigate('/')
      }
   }, [accessToken, navigate])

   const onFaillure = (res) => {
      console.log('LOGIN FAILLURE! res:', res)
   }

   const title = 'Connection'
   const accessPhrase = 'Access to MasTubePlayer'

   return (
      <div className="login__container">
         <div className="login__ui">
            <h2 className="login__title">{title}</h2>
            <h4 className="login__phrase">{accessPhrase}</h4>

            <Link className="link__decoration" to={'/dashbord'}>
               <GoogleLogin
                  clientId={clientId}
                  render={(renderProps) => (
                     <button
                        className="btn-login"
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                     >
                        <i className="fa-brands fa-google google-icon"></i>{' '}
                        Login with your google account
                     </button>
                  )}
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
