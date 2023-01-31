// Modules import
import Sticktop from "./components/Sticktop";
import Filters from "./components/Filters";
import Stories from "./components/Stories";
import Footernav from "./components/Footernav";

// styling imports
import "./App.css";

// import componenets

function App() {
  return (
    <div className="App">
      <Sticktop />
      <div className="topSplash">
        <h1>GET INFORMED</h1>
        <h1>GET INSPIRED</h1>
        <hr></hr>
        <h3>Stories Curated For You</h3>
        <button
          className="signUpButton"
          onClick={console.log("Called sign up")}
        >
          Sign Up
        </button>
      </div>
      <Filters />
      <Stories />
      <button
        className="readMore"
        onClick={console.log("Called read more stories")}
      >
        Read More
      </button>
      <Footernav />
      <p>&copy;2023 Flipboard</p>
    </div>
  );
}

export default App;
