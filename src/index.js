//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";
const currentDate = new Date(2022, 3, 8, 20);
const timeOfDay = currentDate.getHours();
console.log(timeOfDay);

if (timeOfDay < 12) {
  ReactDOM.render(
    <h1 className="heading" style={{ color: "red" }}>
      Morning!
    </h1>,
    document.getElementById("root")
  );
} else if (timeOfDay < 18) {
  ReactDOM.render(
    <h1 className="heading" style={{ color: "green" }}>
      Afternoon!
    </h1>,
    document.getElementById("root")
  );
} else {
  ReactDOM.render(
    <h1 className="heading" style={{ color: "blue" }}>
      Evening!
    </h1>,
    document.getElementById("root")
  );
}

<h1 class="heading">Heading</h1>;
