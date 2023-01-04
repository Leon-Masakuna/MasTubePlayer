import React from 'react'
import '../styles/notification.css'
import Message from './Message'

const NotificationPopup = ({ showPopUp }) => {
   return (
      <div className="popup-container">
         <div className="overlay" onClick={showPopUp}></div>
         <div className="popup-head">
            <h1>Notifications</h1>
            <h1 onClick={showPopUp}>
               <i className="fa-solid fa-circle-xmark close-button"></i>
            </h1>
         </div>
         <Message />
         <Message />
         <Message />
         <Message />
      </div>
   )
}

export default NotificationPopup
