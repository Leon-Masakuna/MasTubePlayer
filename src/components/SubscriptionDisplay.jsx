import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const SubscriptionDisplay = () => {
   return (
      <div>
         <Navbar />
         <Sidebar />
         <div>
            <div className="grid_sidebar_searchbar">
               <div className="main_side">
                  <div className="image__preview image__container">
                     {/* {videos.map((item, id) => (
                        <Link
                           className="video__link__style"
                           to={'/subscribedVideosLecture'}
                           to={`/videoplay/${item.id}`}
                           key={id}
                        >
                           <SubscribedCard key={id} video={item} />
                        </Link>
                     ))} */}
                     <div>
                        <h1>Affichage videos de la chaine choisie</h1>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default SubscriptionDisplay
