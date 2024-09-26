import React from 'react';
import './Card.css'; // Assuming styles for Card are in Card.css

function Card({ image, name, place, link }) {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <h2 className="card-title">{name}</h2>
      <p className="card-place">{place}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="card-button">
        Learn More
      </a>
    </div>
  );
}

export default Card;
