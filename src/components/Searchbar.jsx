import React from "react";
import "../styles/searchbar_style.css";

const Searchbar = () => {
  return (
    <div>
      <input
        className="searchbar"
        type="search"
        placeholder="Rechercher une vidéo"
      />
    </div>
  );
};

export default Searchbar;
