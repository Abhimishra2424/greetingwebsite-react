import React from "react";
import ReactDom from "react-dom";
import './index.css'

let curDate = new Date();
curDate = curDate.getHours();

let greeting = "";
const cssstyle = {};

// 1 se 11am to good morning

if (curDate >= 1 && curDate < 12) {
  greeting = "good Morning";
  cssstyle.color = "green";
  //12pm se 7pm tak good afternoon
} else if (curDate >= 12 && curDate < 19) {
  greeting = "Good Afternoon";
  cssstyle.color = "orange";
  // or jobhi hai usko good night 
} else {
  greeting = "Good Night";
  cssstyle.color = "black";
}

ReactDom.render(
  <>
    <div>
      <h1>
        Hello sir , <span style={cssstyle}> {greeting} </span>
      </h1>
    </div>
  </>,
  document.getElementById("root")
);
