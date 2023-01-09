import socketIO from 'socket.io-client'
import React, { useEffect } from 'react'
import { useState } from 'react'
import '../styles/notification.css'
import Message from './Message'

const socket = socketIO.connect('http://localhost:8100')
const NotificationPopup = ({ showPopUp, notifications }) => {
   const [notificationRows, setNotificationRows] = useState([])

   const getNotifications = () => {
      socket.emit('getNotifications', {})
   }

   useEffect(() => {
      getNotifications()
      socket.on('receiveNotifications', (notification) => {
         setNotificationRows(notification)
      })
      socket.on('notificationResponse', (notification) =>
         setNotificationRows([notification, ...notifications])
      )
   }, [socket, notifications])

   // console.log('popup : ', notificationRows)

   return (
      <div className="popup-container">
         <div className="overlay" onClick={showPopUp}></div>
         <div className="popup-head">
            <h1>Notifications</h1>
            <h1 onClick={showPopUp}>
               <i className="fa-solid fa-circle-xmark close-button"></i>
            </h1>
         </div>
         {notificationRows.map((notification) => {
            return <Message notification={notification} />
         })}
      </div>
   )
}

export default NotificationPopup
