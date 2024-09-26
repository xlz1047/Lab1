import React from 'react';
import './Card.css';

const Card = ({ image, name, place, link }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <h2>{name}</h2>
      <p>{place}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button className="learn-more-btn">Learn More</button>
      </a>
    </div>
  );
};

export default Card;
