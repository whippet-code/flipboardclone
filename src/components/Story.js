import React from "react";

//styles
import "./ComponentStyles.css";

//components
import User from "./User";
import Databar from "./Databar";

// props in story(user, timeStamp, imageUrl, text, source, likes, shares)
function Story(props) {
  return (
    <div className="Story">
      <User name={props.story.user} />
      <img src={props.story.imageUrl} alt="card"></img>
      <p>{props.story.timeStamp}</p>
      <h3>{props.story.text}</h3>
      <p>{props.story.source}</p>
      <Databar
        likes={props.story.data.likes}
        shares={props.story.data.shares}
      />
    </div>
  );
}

export default Story;
