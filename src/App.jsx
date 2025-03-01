import "./App.css";
import Logo from "./assets/Logo.png";
import Card from "./assets/components/Card";
import players from "./Players";
import { useState } from "react";

function App() {
  const [index, setIndex] = useState(0);
  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % players.length);
  };

  let currentPlayer = players[index];
  return (
    <>
      <div className="info">
        <img className="logo" src={Logo} />
        <h1>Guess the NBA Silhouettes!</h1>
        <h3>
          Do you have elite ball knowledge? Test your knowledge with these
          (current) players!
        </h3>
        <p>Number of players: {players.length}</p>
        <Card
          name={currentPlayer.name}
          image={currentPlayer.image}
          difficulty={currentPlayer.difficulty}
          key={index}
        />
        <button onClick={handleNext}>Next</button>
      </div>
    </>
  );
}

export default App;
