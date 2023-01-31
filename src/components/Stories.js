import React from "react";

//styles
import "./ComponentStyles.css";

// Components
import Story from "./Story";

// story builder
function StoryObj(user, timeStamp, imageUrl, text, source, data) {
  this.user = user;
  this.timeStamp = timeStamp;
  this.imageUrl = imageUrl;
  this.text = text;
  this.source = source;
  this.data = data;
}

// Stories for array
const story1 = new StoryObj(
  "Mark",
  "3 hours ago",
  "https://i.pinimg.com/564x/19/76/2d/19762d1399c601bb15cf5e38e6298aed.jpg",
  "Iconic Images of Social Change Prove How Far We Still Have to Go. Uzo Aduba, Katie Holmes, and Ieshia Evans.",
  "Time Magazine - Ben Smith",
  { likes: 317, shares: 212 }
);
console.log(story1.user);
const story2 = new StoryObj(
  "Ed T.",
  "9 hours ago",
  "https://i.pinimg.com/564x/62/1c/2e/621c2ea569a3f60b7cef71334ed8d892.jpg",
  "Juxtapos collage artist feature, Quento Leverve. ",
  "Art Review - Miranda Blessed",
  { likes: 244, shares: 133 }
);

const story3 = new StoryObj(
  "RandomUser",
  "14 hours ago",
  "https://i.pinimg.com/564x/8c/6b/b7/8c6bb7ca868b2bd093f99a82ee2fc700.jpg",
  "Time to break out the Spring wardrobe updates.",
  "gq Magazine - Ken Hokusai",
  { likes: 31, shares: 92 }
);

const storyArr = [story1, story2, story3];

// main story card area with each card component called (story) from array (use .map())

function Stories() {
  return (
    <div className="Stories">
      {storyArr.map((story, i) => {
        return <Story story={story} key={i} />;
      })}
    </div>
  );
}

export default Stories;
