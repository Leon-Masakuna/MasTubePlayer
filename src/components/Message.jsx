import React from 'react'
import moment from 'moment/moment'

const Message = () => {
   return (
      <div>
         <hr />
         <div className="popup-list">
            <div className="popup-msg-img">
               <img
                  src={localStorage.getItem('imageUrl')}
                  alt="image"
                  className="popup-user-icon"
               />
            </div>
            <div className="popup-msg">
               <div className="popup-msg-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus nihil reprehenderit ullam earum similique eum
                  labore minima?
               </div>
               <div className="popup-msg-time">
                  {moment(new Date().getTime()).fromNow()}
               </div>
            </div>
         </div>
      </div>
   )
}

export default Message
