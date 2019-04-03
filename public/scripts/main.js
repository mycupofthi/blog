"use strict";

var blogPosts = [
// USE BELOW CODE AS TEMPLATE FOR FUTURE BLOG POSTS
//   please take care in separating each object with a comma
//   {
//     imgURL: "",
//     linkURL: "",
//     postTitle: ""
//   }
{
  imgURL: "https://static.indigoimages.ca/2019/585x585_blog_spa.jpg",
  linkURL: "/inspired/wellness/spa-day",
  postTitle: "How to Create a Spa Day at Home "

}, {
  imgURL: "https://static.indigoimages.ca/2019/585x585_blog_salmonrecipe.jpg",
  linkURL: "/inspired/food-entertaining/salmon-recipe",
  postTitle: "Recipe: Orange Honey Salmon"
}, {
  imgURL: "https://static.indigoimages.ca/2019/585x585_blog_author_annie.jpg",
  linkURL: "/inspired/books/Annie-Leibovitz",
  postTitle: "5 Life Lessons with Annie Leibovitz"
}, {
  imgURL: "https://static.indigoimages.ca/2019/585x585_blog_10books.jpg",
  linkURL: "/inspired/books/10-books",
  postTitle: "Shelf Life: 10 Books by Badass Moms"
}, {
  imgURL: "https://static.indigoimages.ca/2019/585x585_blog_typesofmom.jpg",
  linkURL: "/inspired/gifting/types-of-mom",
  postTitle: "Mother's Day Gift Ideas for Every Type of Mom"
}, {
  imgURL: "https://static.indigoimages.ca/2019/585x585_blog_lettertomom.jpg",
  linkURL: "/inspired/gifting/letters-to-mom",
  postTitle: "How to Master the Art of Letter Writing"
}, {
  imgURL: "https://static.indigoimages.ca/2019/585x585_blog_curated_mattnat.jpg",
  linkURL: "/inspired/style-design/matt-and-nat",
  postTitle: "Curated by Indigo: Matt & Nat"
}, {
  imgURL: "https://static.indigoimages.ca/2019/585x585_blog_chefsouschef.jpg",
  linkURL: "/inspired/food-entertaining/blueberry-french-toast",
  postTitle: "In the Kitchen with Chef Sous Chef"
}, {
  imgURL: "https://static.indigoimages.ca/2019/585x585_blog_baby.jpg",
  linkURL: "/inspired/family/nursery-decor",
  postTitle: "How to Create a Calming Baby Nursery"
}, {
  imgURL: "https://static.indigoimages.ca/2019/585_585_blog_curated_magnolia.jpg",
  linkURL: "/inspired/style-design/joanna-gaines",
  postTitle: "Curated by Indigo: Magnolia Home by Joanna Gaines"
}, {
  imgURL: "https://static.indigoimages.ca/2019/585x585_blog_crystal.jpg",
  linkURL: "/inspired/wellness/crystals",
  postTitle: "4 Ways Crystals Can Improve Your Life"
}];

// initialize empty array, take out object from array if location matches linkUrl, and 
// shuffle array
var adjustedBP = [];

blogPosts.map(function (d) {

  // if linkURL is NOT in array, then add into adjustedBP
  if (window.location.href.indexOf(d.linkURL) === -1) {
    adjustedBP.push(d);
  }
});

// shuffle array
function shuffle(array) {
  var i = 0,
      j = 0,
      temp = null;

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

shuffle(adjustedBP);

// appending card to bxslider parent
function appendCard() {
  // markup for individual card
  var bxslider = document.querySelector('.bxslider-test');

  adjustedBP.map(function (d) {
    var blogURL = d.linkURL;
    var blogImg = d.imgURL;
    var blogTitle = d.postTitle;
  });

  for (var i = 0; i <= 9; i++) {
    var cardIndex = i;
    var markup = "<a href=\"" + blogURL + "\" class=\"card__link\">\n        <img src=\"" + blogImg + "\" class=\"card__image\">\n        <h2 class=\"banner__caption-title\">" + blogTitle + "</h2>\n      </a>";

    // create card container and add the markup 
    var cardContainer = document.createElement('div');
    cardContainer.className = 'card';
    cardContainer.id = cardIndex;
    cardContainer.innerHTML = markup;
    bxslider.appendChild(cardContainer);
  }
  console.log(adjustedBP);
}

appendCard();