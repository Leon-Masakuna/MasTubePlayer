import React, { useState } from 'react'

const Notification = () => {
   const [count, setCount] = useState(0)
   return (
      <div className="notification">
         <i className="fa-solid fa-bell"></i>
         <span className="counter">{count}</span>
      </div>
   )
}

export default Notification
