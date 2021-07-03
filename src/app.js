/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extensions = [".com", ".net", ".us", ".io", ".etc"];

  const randomIndex = lengthOfArray => {
    return Math.floor(Math.random() * lengthOfArray);
  };

  console.log(pronoun[randomIndex(pronoun.length)]);
  console.log(adj[randomIndex(adj.length)]);
  console.log(noun[randomIndex(noun.length)]);
  console.log(extensions[randomIndex(extensions.length)]);
  document.getElementById("The Domain Name Generator").innerHTML =
    pronoun[randomIndex(pronoun.length)] +
    " " +
    adj[randomIndex(adj.length)] +
    " " +
    noun[randomIndex(noun.length)] +
    " " +
    extensions[randomIndex(extensions.length)];
};
