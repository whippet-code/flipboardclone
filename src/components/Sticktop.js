import React from "react";

//styles
import "./ComponentStyles.css";

// Top bar rendered
function Sticktop() {
  return (
    <>
      <div className="stickyTop">
        <img
          src="https://cdn.flipboard.com/wp-content/uploads/2018/01/Flipboard-Horiztonal-Logo.jpg"
          alt="logo"
        ></img>
        <div className="rightSide">
          <a href="#stickyTop">Newsletters</a>
          <form>
            <input type="text" placeholder="&#128269; Search Flipboard"></input>
            <button className="signUpButton">Sign Up</button>
            <button className="signInButton">Log In</button>
          </form>
        </div>
      </div>
      <hr></hr>
    </>
  );
}

export default Sticktop;
