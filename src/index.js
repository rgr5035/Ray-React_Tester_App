import React from "react";
import ReactDOM from "react-dom";

const element = <h1>Hello World</h1>;
console.log(element);

//first argument is the element we want to render, second parameter specify where in realDOM we want to render
ReactDOM.render(element, document.getElementById("root"));
