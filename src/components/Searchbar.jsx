import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/searchbar_style.css'

const Searchbar = () => {
   const [inputSearch, setInputSearch] = useState('')

   const handleChange = (e) => {
      setInputSearch(e.target.value)
   }

   return (
      <form className="searchbar__container">
         <input
            className="searchbar"
            type="search"
            placeholder="search for a video"
            onChange={handleChange}
            value={inputSearch}
            required
         />
         {inputSearch !== '' ? (
            <Link className="button_link" to={`/searchpage/${inputSearch}`}>
               <button className="searchbar searchbar__button" type="submit">
                  <i className="fa-solid fa-magnifying-glass"></i>
               </button>
            </Link>
         ) : (
            <button
               disabled
               className="searchbar searchbar__button"
               type="submit"
            >
               <i className="fa-solid fa-magnifying-glass"></i>
            </button>
         )}
      </form>
   )
}

export default Searchbar
