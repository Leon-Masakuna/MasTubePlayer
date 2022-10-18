import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/searchbar_style.css'

const Searchbar = () => {
   const [inputSearch, setInputSearch] = useState('')

   return (
      <div className="searchbar__container">
         <input
            className="searchbar"
            type="search"
            placeholder="Entrez le titre d'une vidéo"
            onChange={(e) => setInputSearch(e.target.value)}
            value={inputSearch}
         />
         <Link className="button_link" to={`/searchpage${inputSearch}`}>
            <button className="searchbar searchbar__button" type="button">
               search
            </button>
         </Link>
      </div>
   )
}

export default Searchbar
