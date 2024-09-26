import React from 'react';
import './App.css';
import Card from './components/Card';

const foodData = [
  { image: '/images/sushi.jpg', name: 'Sushi', place: 'Japan', link: 'https://example.com/sushi' },
  { image: '/images/tacos.jpg', name: 'Tacos', place: 'Mexico', link: 'https://example.com/tacos' },
  { image: '/images/pizza.jpg', name: 'Pizza', place: 'Italy', link: 'https://example.com/pizza' },
  { image: '/images/pad-thai.jpg', name: 'Pad Thai', place: 'Thailand', link: 'https://example.com/pad-thai' },
  { image: '/images/curry.jpg', name: 'Curry', place: 'India', link: 'https://example.com/curry' },
  { image: '/images/falafel.jpg', name: 'Falafel', place: 'Middle East', link: 'https://example.com/falafel' },
  { image: '/images/bbq.jpg', name: 'BBQ', place: 'USA', link: 'https://example.com/bbq' },
  { image: '/images/dumplings.jpg', name: 'Dumplings', place: 'China', link: 'https://example.com/dumplings' },
  { image: '/images/bulgogi.jpg', name: 'Bulgogi', place: 'Korea', link: 'https://example.com/bulgogi' },
  { image: '/images/paella.jpg', name: 'Paella', place: 'Spain', link: 'https://example.com/paella' }
];

function App() {
  return (
    <div className="App">
      <h1>Global Food Community Board</h1>
      <div className="card-container">
        {foodData.map((food, index) => (
          <Card
            key={index}
            image={food.image}
            name={food.name}
            place={food.place}
            link={food.link}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
