import React from 'react';
import './App.css';
import Card from './components/Card'; // Assuming Card component is in a "components" folder

// Import images from assets folder
import paella from './assets/paella.jpg';
import sushi from './assets/sushi.png';
import moussaka from './assets/moussaka.jpg';
import pekingDuck from './assets/peking_duck.jpg';
import pho from './assets/pho.jpg';
import tomYum from './assets/tom_yum.jpg';
import goulash from './assets/goulash.jpg';
import chickenTikkaMasala from './assets/chicken_tikka_masala.jpg';
import pizza from './assets/pizza.jpg';
import duckConfit from './assets/duck_confit.jpg';

// Data for the food cards
const foodData = [
  { image: paella, name: 'Paella', place: 'Spain', link: 'https://www.recipetineats.com/spanish-paella/' },
  { image: sushi, name: 'Sushi', place: 'Japan', link: 'https://www.japan.travel/en/guide/sushi-in-japan/' },
  { image: moussaka, name: 'Moussaka', place: 'Greece', link: 'https://www.dimitrasdishes.com/moussaka/' },
  { image: pekingDuck, name: 'Peking Duck', place: 'China', link: 'https://zandypekingduck.com/2024/01/15/the-history-of-peking-duck/' },
  { image: pho, name: 'Pho', place: 'Vietnam', link: 'https://vietnam.travel/things-to-do/history-pho' },
  { image: tomYum, name: 'Tom Yum', place: 'Thailand', link: 'https://www.recipetineats.com/tom-yum-soup-thai/' },
  { image: goulash, name: 'Goulash', place: 'Hungary', link: 'https://www.daringgourmet.com/traditional-hungarian-goulash-gulyas/' },
  { image: chickenTikkaMasala, name: 'Chicken Tikka Masala', place: 'India', link: 'https://cafedelites.com/chicken-tikka-masala/' },
  { image: pizza, name: 'Pizza', place: 'Italy', link: 'https://www.eduardosenoteca.com/blog/italys-pizza-by-region' },
  { image: duckConfit, name: 'Confit de Canard', place: 'France', link: 'https://job-in-france.babylangues.com/french-cuisine/confit-de-canard/' }
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
