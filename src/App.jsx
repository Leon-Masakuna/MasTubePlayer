import { gapi } from 'gapi-script'
import { useEffect } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Authentification from './pages/Authentification'
import HomePage from './pages/HomePage'

const clientId =
   '207208175376-74k3vacevfg0a05ju6tuld9ejsogvpm9.apps.googleusercontent.com'

export default function App() {
   useEffect(() => {
      function start() {
         gapi.client.init({
            clientId: clientId,
            scope: '',
         })
      }
      gapi.load('client: auth2', start)
   })

   return (
      <div className="login__main__container">
         <Routes>
            <Route path="/" element={<Authentification />} />
            <Route path="/dashbord" element={<HomePage />} />
         </Routes>
      </div>
   )
}
