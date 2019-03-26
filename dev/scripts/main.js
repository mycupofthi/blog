const blogPosts = [
  // USE BELOW CODE AS TEMPLATE FOR FUTURE BLOG POSTS 
  //   please take care in separating each object with a comma
//   {
//     imgURL: "",
//     linkURL: "",
//     postDesc: ""
//   }
  {
        imgURL: "https://static.indigoimages.ca/2019/test1carousel.png",
    linkURL: "indigo.ca",
    postDesc: "first blog post"
  },
  {
      imgURL: "https://static.indigoimages.ca/2019/test2carousel.png",
    linkURL: "indigo.ca",
    postDesc: "second blog post"
},
    {
        imgURL: "https://static.indigoimages.ca/2019/test3carousel.png",
    linkURL: "indigo.ca",
    postDesc: "third blog post"
}
];

// We initialize a function that will target the existing HTML and input a random blog post in the carousel
function getRandomPost() {
    // We first get a random index in the array
    const randomIndex = blogPosts[Math.floor(Math.random() * blogPosts.length)];
    console.log(randomIndex)
    document.getElementById('someid')
}

getRandomPost();