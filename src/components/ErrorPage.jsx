import React from 'react'
import '../styles/error_style.css'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
   return (
      <div className="error">
         <h1>ERROR DETECTED</h1>
         <p>Request Failed or Quota Quotes Exceded</p>
         <p>Please reload the application by loging out and try again later</p>
         <p>
            For any contact :{' '}
            <Link className="mail__link">
               <span className="mail__address">
                  masakunamfengleon@gmail.com
               </span>
            </Link>
         </p>
      </div>
   )
}

export default ErrorPage
