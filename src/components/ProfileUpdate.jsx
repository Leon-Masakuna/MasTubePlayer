import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../styles/profileUpdate_style.css'

const ProfileUpdate = () => {
   const { userId } = useParams()
   const [user, setUser] = useState({
      name: '',
      email: '',
      imageUrl: '',
      linkedin: '',
      github: '',
   })

   const [selectedImage, setSelectedImage] = useState(null)
   const [imageUrl, setImageUrl] = useState(null)

   const fetchData = `http://localhost:8100/api/user/${userId}`
   const accessToken = localStorage.getItem('token')

   const ref = useRef()
   const handleClick = (e) => {
      ref.current.click()
   }

   const handleSubmit = () => {
      axios
         .put(`http://localhost:8100/api/user/${userId}`, {
            name: user.name,
            email: user.email,
            imageUrl: user.imageUrl,
            linkedin: user.linkedin,
            github: user.github,
         })
         .then(
            (response) => {
               console.log('response : ', response)
            },
            (error) => {
               console.log(error)
            }
         )
   }
   console.log('user submission : ', user.name)

   useEffect(() => {
      fetch(fetchData, {
         method: 'GET',
         headers: new Headers({ Authorization: `Bearer ${accessToken}` }),
      })
         .then((res) => res.json())
         .then((data) => {
            setUser(data)
            console.log('items: ', data)
         })
   }, [])

   const handleChange = (event) => {
      setUser(event.target.value)
   }

   useEffect(() => {
      if (selectedImage) {
         setImageUrl(URL.createObjectURL(selectedImage))
      }
   }, [selectedImage])

   return (
      <div className="profile_container">
         <div className="photo_upload">
            <div className="image" htmlFor="selected-image">
               {imageUrl && selectedImage ? (
                  <img
                     src={imageUrl}
                     alt={selectedImage.name}
                     className="profile"
                  />
               ) : (
                  <img
                     src={user.imageUrl}
                     alt="profile-picture"
                     className="profile"
                  />
               )}
            </div>
            <div onClick={handleClick}>
               <i className="fa-solid fa-camera photo_upload img_download_icon"></i>
               <input
                  ref={ref}
                  type="file"
                  accept=".jpg,.jpeg,.png"
                  style={{ display: 'none' }}
                  id="selected-image"
                  onChange={(e) => setSelectedImage(e.target.files[0])}
               />
            </div>
         </div>
         <form className="identities">
            <div className="identities_upload">
               <div>
                  <i className="fa-solid fa-user"></i>
               </div>
               <div>
                  <input
                     type="text"
                     name=""
                     id=""
                     className="input_fields"
                     placeholder="Léon Masakuna"
                     value={user.name}
                     // ref={inputRef}
                     onChange={handleChange}
                  />
               </div>
            </div>
            <div className="identities_upload">
               <div>
                  <i className="fa-solid fa-envelope"></i>
               </div>
               <div>
                  <input
                     type="text"
                     name=""
                     id=""
                     className="input_fields"
                     placeholder="masakunamfengleon@gmail.com"
                     value={user.email}
                     onChange={handleChange}
                  />
               </div>
            </div>
            <div className="identities_upload">
               <div>
                  <i className="fa-brands fa-linkedin"></i>
               </div>
               <div>
                  <input
                     type="text"
                     name=""
                     id=""
                     className="input_fields"
                     placeholder="linkedin link"
                     value={user.linkedin}
                     onChange={handleChange}
                  />
               </div>
            </div>
            <div className="identities_upload">
               <div>
                  <i className="fa-brands fa-square-github"></i>
               </div>
               <div>
                  <input
                     type="text"
                     name=""
                     id=""
                     className="input_fields"
                     placeholder="github link"
                     value={user.github}
                     onChange={handleChange}
                  />
               </div>
            </div>
            <div className="profile_buttons">
               <Link
                  className="button_link"
                  to={`/userprofile/${localStorage.getItem('userId')}`}
               >
                  <button>Cancel</button>
               </Link>
               <Link className="button_link">
                  <button type="submit" onClick={handleSubmit}>
                     Validate
                  </button>
               </Link>
            </div>
         </form>
      </div>
   )
}

export default ProfileUpdate
