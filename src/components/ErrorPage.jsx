import React from 'react'
import '../styles/error_style.css'
import { Link } from 'react-router-dom'
import ButtonMailto from './MailTo'

const ErrorPage = () => {
   const errorTitle = 'ERROR DETECTED'
   const errorDescription = 'Access token expired or Quotas have been Exceeded'
   const message =
      "Please restart the application by loging out and try again. If it doesn't still work, try after 24 hours"
   const contact = 'For any contact, write me an e-mail to :'

   return (
      <div className="error__container">
         <div className="error">
            <h1>{errorTitle}</h1>
            <p>{errorDescription}</p>
            <p>{message}</p>
            <p>
               {contact}{' '}
               <Link className="mail__link">
                  {/* <span className="mail__address"> */}
                  <ButtonMailto
                     className="mail__address"
                     label="masakunamfengleon@gmail.com"
                     mailto="mailto:masakunamfengleon@gmail.com"
                  />
                  {/* </span> */}
               </Link>
            </p>
         </div>
      </div>
   )
}

export default ErrorPage
