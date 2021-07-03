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
  let extension = [".com", ".net", ".io", ".us"];

  for (let index = 0; index < pronoun.length; index++) {
    const element = pronoun[index];
    for (let index = 0; index < adj.length; index++) {
      let secondElement = element + adj[index];
      for (let index = 0; index < noun.length; index++) {
        let thirdElement = secondElement + noun[index];
        for (let index = 0; index < extension.length; index++) {
          let forthElement = thirdElement + extension[index];
          console.log(forthElement);
        }
      }
    }
  }
};
