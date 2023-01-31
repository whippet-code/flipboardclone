import React from "react";

//styles
import "./ComponentStyles.css";

// Components
import Story from "./Story";

// story builder
function StoryObj(user, timeStamp, imageUrl, text, source, data) {
  user = this.user;
  timeStamp = this.timeStamp;
  imageUrl = this.imageUrl;
  text = this.text;
  source = this.source;
  data = this.data;
}
// Stories for array
const story1 = new StoryObj(
  "Mark",
  "10 hours ago",
  "https://i.pinimg.com/564x/75/e6/c8/75e6c843a4b9e5ed2e18ac2167e0c226.jpg",
  "Iconic Images of Social Change Prove How Far We Still Have to Go. Uzo Aduba, Katie Holmes, and Ieshia Evans reenact the activist moments that mattered over the past century—and three prominent thinkers discuss the progress we've made.",
  "Time Magazine",
  { like: "102", shares: "101" }
);

const story2 = new StoryObj(
  "Ed T.",
  "13 hours ago",
  "https://i.pinimg.com/564x/72/fc/08/72fc08763e2e2c7c8fbe69cd079cf221.jpg",
  "Juxtapos collage artist feature, Quento Leverve. ",
  "Art Review",
  { like: "91", shares: "53" }
);

const story3 = new StoryObj(
  "RandomUser",
  "14 hours ago",
  "https://i.pinimg.com/564x/8c/6b/b7/8c6bb7ca868b2bd093f99a82ee2fc700.jpg",
  "Time to break out the Spring wardrobe updates.",
  "gq Magazine",
  { like: "31", shares: "47" }
);

const storyArr = [story1, story2, story3];

function Stories() {
  return (
    <div className="Stories">
      {storyArr.map((story, i) => {
        return <Story story={story} key={i} />;
      })}
      )
    </div>
  );
}

export default Stories;
