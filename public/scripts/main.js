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
},
// {
//   imgURL: "https://static.indigoimages.ca/2019/585x585_blog_author_annie.jpg",
//   linkURL: "/inspired/books/Annie-Leibovitz",
//   postTitle: "5 Life Lessons with Annie Leibovitz",
// },
{
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
}, {
  imgURL: "https://static.indigoimages.ca/2019/585x585_blog_mothersdaybrunch.jpg",
  linkURL: "/en-ca/inspired/food-entertainment/mothers-day-brunch/joanna-gaines",
  postTitle: "Setting A Mother's Day Brunch Table With Crumb"
}];

// initialize empty array
var adjustedBP = [];

// map through original array
blogPosts.map(function (d) {

  // if the current url does not match object linkURL, add to adjusted array
  if (window.location.href.indexOf(d.linkURL) === -1) {
    adjustedBP.push(d);
  }
});

// shuffle adjusted array
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

var blogURL = void 0,
    blogImg = void 0,
    blogTitle = void 0;

// append card to bxslider
function appendCard() {

  // markup for individual card
  var bxslider = document.querySelector('.bxslider-inspire');

  for (var i = 0; i <= 9; i++) {

    blogURL = adjustedBP[i].linkURL;
    blogImg = adjustedBP[i].imgURL;
    blogTitle = adjustedBP[i].postTitle;

    var _markup = "<a href=\"" + blogURL + "\" class=\"card__link\">\n      <img src=\"" + blogImg + "\" class=\"card__image\">\n      <div class=\"banner__copy-container\">\n        <h2 class=\"banner__caption-title\">" + blogTitle + "</h2>\n      </div>\n    </a>";

    var cardIndex = i;

    // create card container, add the markup  and append to bxslider
    var cardContainer = document.createElement('div');
    cardContainer.className = 'card';
    cardContainer.id = cardIndex;
    cardContainer.innerHTML = _markup;
    bxslider.appendChild(cardContainer);
  }
}

appendCard();

prerequire.add(['jquery'], function ($) {
  $(function () {
    var $slider = void 0;

    // bxslider config settings
    function buildSliderConfig() {
      var windowWidth = $(window).width();
      var margin = void 0;

      // card right margin based on viewport
      if (windowWidth <= 675) {
        margin = 0.0625 * windowWidth;
      } else if (windowWidth < 1920) {
        margin = 0.04 * windowWidth;
      } else if (windowWidth >= 1920) {
        margin = 82.5;
      }

      return {
        pager: windowWidth <= 675 ? true : false,
        slideWidth: windowWidth <= 675 ? 316.4 : 585,
        slideMargin: margin,
        maxSlides: windowWidth <= 675 ? 2 : 3,
        minSlides: windowWidth <= 675 ? 2 : 3,
        moveSlides: windowWidth <= 675 ? 2 : 3,
        nextText: '<img src="https://static.indigoimages.ca/2019/next.png">',
        prevText: '<img src="https://static.indigoimages.ca/2019/previous.png">'
      };
    }

    // initialize and reload slider behaviour
    function configureSlider() {
      var config = buildSliderConfig();

      // if the slider is reloaded, reload config
      if ($slider && $slider.reloadSlider) {
        $slider.reloadSlider(config);

        // else initialize slider
      } else {
        $slider = $('.bxslider-inspire').bxSlider(config);
      }
    }

    // if the orientation changes or the window is resized, change config settings
    $(window).on('orientationchange resize', _.debounce(configureSlider));

    // init 
    configureSlider();
  });
});

// START SHARE CODE


// SHARE FUNCTIONALITY FOR HEADER //

// we then store the markup we would like to add in a variable
var markup = "  \n          <div class=\"share-top__social--buttons\">\n            <ul class=\"share-top__social--buttons-list\">\n              <li class=\"share-top__social--buttons-list-item\">\n                <a\n                  href=\"https://twitter.com/share?via=chaptersindigo\"\n                  target=\"_blank\"\n                >\n                  <svg\n                    id=\"SvgjsSvg1012\"\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                    version=\"1.1\"\n                    xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                    width=\"16\"\n                    height=\"14\"\n                    viewBox=\"0 0 16 14\"\n                    focusable=\"false\"\n                  >\n                    <defs id=\"SvgjsDefs1013\"></defs>\n                    <path\n                      id=\"SvgjsPath1014\"\n                      d=\"M1010.12 1021.21C1010.79 1020.7800000000001 1011.3100000000001 1020.08 1011.5600000000001 1019.26C1010.9200000000001 1019.66 1010.22 1019.96 1009.47 1020.12C1008.88 1019.43 1008.02 1019 1007.08 1019C1005.26 1019 1003.8000000000001 1020.58 1003.8000000000001 1022.53C1003.8000000000001 1022.81 1003.82 1023.0799999999999 1003.8800000000001 1023.3399999999999C1001.1500000000001 1023.1899999999999 998.7300000000001 1021.79 997.1100000000001 1019.6499999999999C996.8300000000002 1020.1699999999998 996.6700000000001 1020.7799999999999 996.6700000000001 1021.4199999999998C996.6700000000001 1022.6499999999999 997.2500000000001 1023.7299999999998 998.1300000000001 1024.37C997.5900000000001 1024.35 997.0900000000001 1024.1899999999998 996.6400000000001 1023.9199999999998V1023.9699999999998C996.6400000000001 1025.6799999999998 997.7700000000001 1027.11 999.2800000000001 1027.4299999999998C999.0000000000001 1027.5199999999998 998.71 1027.56 998.4100000000001 1027.56C998.2 1027.56 997.9900000000001 1027.54 997.7900000000001 1027.49C998.21 1028.9 999.4200000000001 1029.92 1000.8600000000001 1029.95C999.7400000000001 1030.9 998.3200000000002 1031.46 996.7800000000001 1031.46C996.5200000000001 1031.46 996.2600000000001 1031.45 996.0000000000001 1031.41C997.4500000000002 1032.41 999.1800000000001 1033 1001.0300000000001 1033C1007.07 1033 1010.3700000000001 1027.61 1010.3700000000001 1022.94C1010.3700000000001 1022.7900000000001 1010.3700000000001 1022.6400000000001 1010.3600000000001 1022.49C1011.0000000000001 1021.99 1011.5600000000002 1021.37 1012.0000000000001 1020.66C1011.4100000000001 1020.9399999999999 1010.7800000000001 1021.13 1010.1200000000001 1021.2099999999999Z \"\n                      fill=\"#333333\"\n                      fill-opacity=\"1\"\n                      transform=\"matrix(1,0,0,1,-996,-1019)\"\n                    ></path>\n                  </svg>\n                </a>\n              </li>\n              <li class=\"share-top__social--buttons-list-item\">\n                <a href=\"\" id=\"top_emailShare\" target=\"_blank\">\n                  <svg\n                    id=\"Layer_1\"\n                    data-name=\"Layer 1\"\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                    viewBox=\"0 0 39.65 27.69\"\n                  >\n                    <path\n                      d=\"M34.64,27.69H5a5,5,0,0,1-5-5V5A5,5,0,0,1,5,0H34.64a5,5,0,0,1,5,5V22.69A5,5,0,0,1,34.64,27.69ZM5,2.5A2.51,2.51,0,0,0,2.5,5V22.69A2.51,2.51,0,0,0,5,25.2H34.64a2.51,2.51,0,0,0,2.51-2.51V5A2.51,2.51,0,0,0,34.64,2.5Z\"\n                    />\n                    <path\n                      d=\"M20,18.75a5,5,0,0,1-3.45-1.38L2,3.61,3.73,1.8l14.5,13.76a2.5,2.5,0,0,0,3.47,0L36.08,1.66l1.74,1.8L23.43,17.34A5,5,0,0,1,20,18.75Z\"\n                    />\n                    <rect\n                      x=\"0.04\"\n                      y=\"18.2\"\n                      width=\"16.58\"\n                      height=\"2.5\"\n                      transform=\"translate(-11.46 11.96) rotate(-46.08)\"\n                    />\n                    <rect\n                      x=\"29.94\"\n                      y=\"11.29\"\n                      width=\"2.5\"\n                      height=\"16.47\"\n                      transform=\"translate(-4.77 27.32) rotate(-44.28)\"\n                    />\n                  </svg>\n                </a>\n              </li>\n              <li class=\"share-top__social--buttons-list-item\">\n                <a href=\"\" id=\"top_facebookShare\" target=\"_blank\">\n                  <svg\n                    class=\"facebook\"\n                    id=\"SvgjsSvg1021\"\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                    version=\"1.1\"\n                    xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                    width=\"8\"\n                    height=\"18\"\n                    viewBox=\"0 0 8 18\"\n                    focusable=\"false\"\n                    alt=\"Share on facebook\"\n                  >\n                    <defs id=\"SvgjsDefs1022\"></defs>\n                    <path\n                      id=\"SvgjsPath1023\"\n                      d=\"M1033.77 1035V1026H1032V1022.9H1033.77V1021.04C1033.77 1018.51 1034.77 1017 1037.62 1017H1039.9799999999998V1020.1H1038.4999999999998C1037.3999999999999 1020.1 1037.3199999999997 1020.5400000000001 1037.3199999999997 1021.34V1022.9H1039.9999999999998L1039.6899999999998 1026H1037.32V1035Z \"\n                      fill=\"#333333\"\n                      fill-opacity=\"1\"\n                      transform=\"matrix(1,0,0,1,-1032,-1017)\"\n                    ></path>\n                  </svg>\n                </a>\n              </li>\n              <li class=\"share-top__social--buttons-list-item\">\n                <a href=\"\" target=\"_blank\" id=\"top_pinterestShare\">\n                  <svg\n                    id=\"SvgjsSvg1018\"\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                    version=\"1.1\"\n                    xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                    width=\"15\"\n                    height=\"20\"\n                    viewBox=\"0 0 15 20\"\n                    focusable=\"false\"\n                  >\n                    <defs id=\"SvgjsDefs1019\"></defs>\n                    <path\n                      id=\"SvgjsPath1020\"\n                      d=\"M1136 1024.18C1136 1026.15 1136.73 1027.91 1138.28 1028.5700000000002C1138.53 1028.67 1138.76 1028.5700000000002 1138.84 1028.2800000000002C1138.8899999999999 1028.0800000000002 1139.01 1027.5700000000002 1139.06 1027.3600000000001C1139.1399999999999 1027.0700000000002 1139.11 1026.97 1138.8999999999999 1026.72C1138.4599999999998 1026.17 1138.1699999999998 1025.46 1138.1699999999998 1024.46C1138.1699999999998 1021.5600000000001 1140.2699999999998 1018.96 1143.6499999999999 1018.96C1146.6399999999999 1018.96 1148.28 1020.85 1148.28 1023.36C1148.28 1026.68 1146.86 1029.47 1144.75 1029.47C1143.59 1029.47 1142.72 1028.48 1142.99 1027.26C1143.33 1025.8 1143.98 1024.23 1143.98 1023.18C1143.98 1022.2399999999999 1143.49 1021.4599999999999 1142.48 1021.4599999999999C1141.29 1021.4599999999999 1140.33 1022.7299999999999 1140.33 1024.4299999999998C1140.33 1025.5099999999998 1140.6799999999998 1026.2499999999998 1140.6799999999998 1026.2499999999998C1140.6799999999998 1026.2499999999998 1139.4699999999998 1031.5799999999997 1139.2499999999998 1032.5099999999998C1138.8299999999997 1034.3699999999997 1139.1899999999998 1036.6399999999999 1139.2199999999998 1036.8699999999997C1139.2399999999998 1037.0099999999998 1139.4099999999999 1037.0399999999997 1139.4799999999998 1036.9399999999996C1139.5899999999997 1036.7899999999995 1141.0099999999998 1034.9799999999996 1141.4899999999998 1033.1799999999996C1141.6299999999999 1032.6699999999996 1142.2799999999997 1030.0199999999995 1142.2799999999997 1030.0199999999995C1142.6599999999999 1030.7799999999995 1143.7899999999997 1031.4499999999996 1144.9899999999998 1031.4499999999996C1148.5699999999997 1031.4499999999996 1150.9999999999998 1028.0899999999997 1150.9999999999998 1023.5799999999996C1150.9999999999998 1020.1699999999996 1148.1999999999998 1016.9999999999995 1143.9499999999998 1016.9999999999995C1138.6699999999998 1016.9999999999995 1135.9999999999998 1020.9099999999995 1135.9999999999998 1024.1799999999996Z \"\n                      fill=\"#333333\"\n                      fill-opacity=\"1\"\n                      transform=\"matrix(1,0,0,1,-1136,-1017)\"\n                    ></path>\n                  </svg>\n                </a>\n              </li>\n            </ul>\n          </div>\n        </div>";
// we need to target the existing share button with class of .share__menu
window.onload = function () {
  var share = document.querySelector(".share__menu");
  var shareContainer = document.createElement("div");
  shareContainer.id = "topShare";
  shareContainer.className = "share-top__social visibilityHidden";
  shareContainer.innerHTML = markup;
  share.appendChild(shareContainer);

  // We listen for a click event on this element, if clicked run createShareMenu()
  share.addEventListener("click", function () {
    shareContainer.classList.toggle("visibilityHidden");
  });

  // CODE BELOW ARE FUNCTIONS THAT ARE CALLED WHEN ICONS ARE CLICKED. THEY ARE COMMENTED OUT FOR THE MOMENT TO FOCUS ON SHOWING/HIDING THE SHARE BUTTON
  // // SHARE BY EMAIL
  var emailLink = document.getElementById("top_emailShare").addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    window.location.href = "mailto:?body=Check this out: " + escape(window.location.href) + "&amp;subject=" + document.title;
  });
  // // FACEBOOK SHARE
  var facebookLink = document.getElementById("top_facebookShare").addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    window.open("https://www.facebook.com/sharer/sharer.php?u=" + escape(window.location.href) + "&amp;t=" + document.title, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600");

    return false;
  });

  // // PINTEREST SHARE
  var pinterestLink = document.getElementById("top_pinterestShare").addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();

    // first we store the window URL in a string so we can input it into the share URL
    var windowUrl = window.location.toString();
    // we need to trim the https:// off the URL to leave us only with the remaining URL for the page
    var urlToAdd = windowUrl.slice(8);
    // We want to target the header banner and the title within it using querySelectorAll
    // If you are re-using this code on a different page then you may need to adjust the below target to be the intended title/description for the pinterest post
    var headerNode = document.querySelectorAll(".cat-header .banner__caption-title");
    // Since the above produces a nodeList we want to store the innerHTML in it's own variable to then push to the description
    var descToAdd = encodeURIComponent(headerNode[0].innerText);
    // we now pull the header mobile image as our pinterest placeholder
    // If you are re-using this on a different page you'll just need to adjust the querySelectorAll to refer to the intended banner
    // const headerImage = document.querySelectorAll(
    //   ".cat-header .banner__image source"
    // );
    // // headerImage pulls another nodelist with 2 items (there are two source tags in the picture element) we want the second one with a more square image
    // const pinImage = encodeURIComponent(
    //   headerImage[1].attributes[0].nodeValue
    // );
    // headerImage[1].srcset
    // we separate each section in order to concatenate later
    // Now we initialize the URL with all of the above components
    var fullUrl = "http://pinterest.com/pin/create/button/?url=https%3A%2F%2F" + urlToAdd + "&description=" + descToAdd;
    // USING THE ABOVE DATA WE NOW OPEN OUR PINTEREST POP-UP
    window.open(fullUrl, "_blank");
    return false;
  });
};