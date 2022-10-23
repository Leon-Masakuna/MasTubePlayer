import { gapi } from 'gapi-script'
import { useEffect } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Authentification from './pages/Authentification'
import HomePage from './pages/HomePage'
import ChannelPage from './pages/ChannelPage'
import ChanelVideosPage from './pages/ChanelVideosPage'
import SearchResultPage from './pages/SearchResultPage'
import Navbar from './components/Navbar'
import VideoReadingPage from './pages/VideoReadingPage'

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

   const Layout = ({ children }) => {
      return (
         <>
            <Navbar />
            <div>{children}</div>
         </>
      )
   }

   return (
      <div className="login__main__container">
         <Routes>
            <Route path="/" element={<Authentification />} />
            <Route
               path="/dashbord"
               element={
                  <Layout>
                     <HomePage />
                  </Layout>
               }
            />
            <Route
               path="/*"
               element={
                  <Layout>
                     <HomePage />
                  </Layout>
               }
            />
            <Route
               path="/videoplay/:videoId/:channelId"
               element={
                  <Layout>
                     <VideoReadingPage />
                  </Layout>
               }
            />
            <Route
               path="/channelPage"
               element={
                  <Layout>
                     <ChannelPage />
                  </Layout>
               }
            />
            <Route
               path="/chanelVideosPage/:channelId"
               element={
                  <Layout>
                     <ChanelVideosPage />
                  </Layout>
               }
            />
            <Route
               path="/searchpage/:searchWord"
               element={
                  <Layout>
                     <SearchResultPage />
                  </Layout>
               }
            />
         </Routes>
      </div>
   )
}
