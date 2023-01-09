import socketIO from 'socket.io-client'
import React, { useEffect, useState } from 'react'
import NotificationPopup from './NotificationPopup'

const socket = socketIO.connect('http://localhost:8100')
const Notification = () => {
   const [modal, setModal] = useState(false)
   const [notifications, setNotifications] = useState([])

   const showPopUp = () => {
      setModal(!modal)
   }

   const getNotifications = () => {
      socket.emit('getNotifications', {})
   }
   // console.log('notifications : ', notifications)

   useEffect(() => {
      getNotifications()
      socket.on('receiveNotifications', (notification) => {
         setNotifications(notification)
      })
      socket.on('notificationResponse', (notification) =>
         setNotifications([notification, ...notifications])
      )
   }, [socket, notifications])

   return (
      <>
         <div className="notification" onClick={showPopUp}>
            <i className="fa-solid fa-bell fa-comment" onClick={showPopUp}></i>
            <span className="counter">{notifications.length}</span>
         </div>
         {modal &&
            notifications.map(() => {
               return <NotificationPopup showPopUp={showPopUp} />
            })}
      </>
   )
}

export default Notification
