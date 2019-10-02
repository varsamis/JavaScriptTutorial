"use strict"

var myNode = document.createElement("DIV");

var myTextNode = document.createTextNode("Some text here");

var myBody = document.getElementsByTagName("body")[0];

myNode.appendChild(myTextNode);

myBody.appendChild(myNode);

document.addEventListener("DOMContentLoaded", onPageLoad);

function onPageLoad(){
  let theButton = document.getElementById("myButton");
  theButton.addEventListener("click", handleButtonClick);
  console.log("Added Eventlistener");
}

function handleButtonClick(){
  console.log("Button clicked");
  let theButton = document.getElementById("myButton");
  theButton.removeEventListener("click", handleButtonClick);
}
