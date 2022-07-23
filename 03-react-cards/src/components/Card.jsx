import React from 'react'
import './Card.css'

const Card = ({ lang, img, fcolor, scolor }) => {
    return (
      <div className="card">
        <img src={img} alt="lang.svg" />
        <h3>{lang}</h3>
      </div>
    );
  };

export default Card