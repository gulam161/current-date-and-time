import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();
root.render(
  <>
    <h1>My name is Gulam Murtuza</h1>
    <p>Current date is: {currDate} </p>
    <p>Current date is: {currTime} </p>
  </>
);
