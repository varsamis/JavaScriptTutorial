"use strict"

var myNode = document.createElement("DIV");

var myTextNode = document.createTextNode("Some text here");

var myBody = document.getElementsByTagName("body")[0];

myNode.appendChild(myTextNode);

myBody.appendChild(myNode);
