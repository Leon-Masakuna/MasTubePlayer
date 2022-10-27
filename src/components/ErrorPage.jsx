import React from 'react'
import '../styles/error_style.css'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
   const errorTitle = 'ERROR DETECTED'
   const errorDescription = 'Access token expired or Quota Quotes Exceeded'
   const message =
      "Please restart the application by loging out and try again. If it doesn't still work, try after 24 hours"
   const contact = 'masakunamfengleon@gmail.com'

   return (
      <div className="error__container">
         <div className="error">
            <h1>{errorTitle}</h1>
            <p>{errorDescription}</p>
            <p>{message}</p>
            <p>
               For any contact :{' '}
               <Link className="mail__link">
                  <span className="mail__address">{contact}</span>
               </Link>
            </p>
         </div>
      </div>
   )
}

export default ErrorPage
