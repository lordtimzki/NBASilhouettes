import "./App.css";
import Logo from "./assets/Logo.png";

function App() {
  return (
    <>
      <div className="info">
        <img className="logo" src={Logo} />
        <h1>Guess the NBA Silhouettes!</h1>
        <h3>
          Do you have elite ball knowledge? Test your knowledge with these
          players!
        </h3>
        <p>Players: </p>
      </div>
    </>
  );
}

export default App;
