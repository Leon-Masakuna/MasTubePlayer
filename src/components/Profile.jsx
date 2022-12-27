import React, { useState, useEffect } from 'react'
import '../styles/profile_style.css'
import ProfileCard from './ProfileCard'
import { useNavigate, useParams } from 'react-router-dom'

const Profile = () => {
   const [user, setUser] = useState([])
   const { userId } = useParams()
   const navigate = useNavigate()

   const fetchData = `http://localhost:8100/api/user/${userId}`
   const accessToken = localStorage.getItem('token')

   useEffect(() => {
      fetch(fetchData, {
         method: 'GET',
      })
         .then((res) => res.json())
         .then((data) => {
            setUser(data)
            console.log('items: ', data)
         })
   }, [])

   useEffect(() => {
      if (!accessToken) {
         navigate('/')
      }
   }, [accessToken, navigate])

   return (
      <>
         <ProfileCard user={user} />
      </>
   )
}

export default Profile
