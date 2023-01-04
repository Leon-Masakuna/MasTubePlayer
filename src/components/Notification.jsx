import React, { useState } from 'react'
import NotificationPopup from './NotificationPopup'

const Notification = () => {
   const [count, setCount] = useState(4)
   const [modal, setModal] = useState(false)

   const showPopUp = () => {
      setModal(!modal)
   }

   return (
      <>
         <div className="notification" onClick={showPopUp}>
            <i className="fa-sharp fa-solid fa-comment" onClick={showPopUp}></i>
            <span className="counter">{count}</span>
         </div>
         {modal && <NotificationPopup showPopUp={showPopUp} />}
      </>
   )
}

export default Notification
