import React, { useEffect } from 'react'
import { GoogleLogin } from 'react-google-login'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/login_style.css'
import { render } from '@testing-library/react'
import axios from 'axios'

const Login = () => {
   const clientId = import.meta.env.VITE_YOUTUBE_CLIENT_ID

   const navigate = useNavigate()
   const onSucces = (res) => {
      const accessToken = res.accessToken
      localStorage.setItem('token', accessToken)

      axios
         .post('http://localhost:8100/api/user', {
            name: res.profileObj.givenName + ' ' + res.profileObj.familyName,
            email: res.profileObj.email,
            imageUrl: res.profileObj.imageUrl,
         })
         .then(
            (response) => {
               console.log('Response : ', response)
               localStorage.setItem('userId', response.data.user._id)
               localStorage.setItem('imageUrl', response.data.user.imageUrl)

               navigate('/dashbord')
            },
            (error) => {
               console.log(error)
            }
         )
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

   //------------------------------------------------------------------------//

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
                  scope={import.meta.env.VITE_YOUTUBE_SCOPE}
               />
            </Link>
         </div>
      </div>
   )
}

export default Login
