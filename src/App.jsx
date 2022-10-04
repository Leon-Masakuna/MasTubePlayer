import ApiRequest from './components/ApiRequest'
import Login from './components/Login'
/* import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar' */
import { gapi } from 'gapi-script'
import { useEffect } from 'react'
import Logout from './components/Logout'

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
      <>
         <Login />
         <Logout />
         {/* <Navbar />
         <ApiRequest /> */}
      </>
   )
}
