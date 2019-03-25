"use strict";

var blogPosts = [
// USE BELOW CODE AS TEMPLATE FOR FUTURE BLOG POSTS 
//   please take care in separating each object with a comma
//   {
//     imgURL: "",
//     linkURL: "",
//     postDesc: ""
//   }
{
  imgURL: "test",
  linkURL: "test",
  postDesc: "test"
}];

// We initialize a function that will target the existing HTML and input a random blog post in the carousel
function getRandomPost() {
  // We first get a random index in the array
  var randomIndex = blogPosts[Math.floor(Math.random() * blogPosts.length)];
  console.log(randomIndex);
}