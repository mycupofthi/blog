const blogPosts = [
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
    postTitle: "How to Create a Spa Day at Home ",
    
  },
  {
    imgURL: "https://static.indigoimages.ca/2019/585x585_blog_salmonrecipe.jpg",
    linkURL: "/inspired/food-entertaining/salmon-recipe",
    postTitle: "Recipe: Orange Honey Salmon",
  },
  {
    imgURL: "https://static.indigoimages.ca/2019/585x585_blog_author_annie.jpg",
    linkURL: "/inspired/books/Annie-Leibovitz",
    postTitle: "5 Life Lessons with Annie Leibovitz",
  },
  {
    imgURL: "https://static.indigoimages.ca/2019/585x585_blog_10books.jpg",
    linkURL: "/inspired/books/10-books",
    postTitle: "Shelf Life: 10 Books by Badass Moms",
  },
  {
    imgURL: "https://static.indigoimages.ca/2019/585x585_blog_typesofmom.jpg",
    linkURL: "/inspired/gifting/types-of-mom",
    postTitle: "Mother's Day Gift Ideas for Every Type of Mom",
  },
  {
    imgURL: "https://static.indigoimages.ca/2019/585x585_blog_lettertomom.jpg",
    linkURL: "/inspired/gifting/letters-to-mom",
    postTitle: "How to Master the Art of Letter Writing",
  },
  {
    imgURL: "https://static.indigoimages.ca/2019/585x585_blog_curated_mattnat.jpg",
    linkURL: "/inspired/style-design/matt-and-nat",
    postTitle: "Curated by Indigo: Matt & Nat",
  },
  {
    imgURL: "https://static.indigoimages.ca/2019/585x585_blog_chefsouschef.jpg",
    linkURL: "/inspired/food-entertaining/blueberry-french-toast",
    postTitle: "In the Kitchen with Chef Sous Chef",
  },
  {
    imgURL: "https://static.indigoimages.ca/2019/585x585_blog_baby.jpg",
    linkURL: "/inspired/family/nursery-decor",
    postTitle: "How to Create a Calming Baby Nursery",
  },
  {
    imgURL: "https://static.indigoimages.ca/2019/585_585_blog_curated_magnolia.jpg",
    linkURL: "/inspired/style-design/joanna-gaines",
    postTitle: "Curated by Indigo: Magnolia Home by Joanna Gaines",
  },
  {
    imgURL: "https://static.indigoimages.ca/2019/585x585_blog_crystal.jpg",
    linkURL: "/inspired/wellness/crystals",
    postTitle: "4 Ways Crystals Can Improve Your Life",
  }
];

// initialize empty array
const adjustedBP = [];

// map through original array
blogPosts.map(function(d) {

  // if the current url does not match object linkURL, add to adjusted array
  if (window.location.href.indexOf(d.linkURL) === -1)  {
    adjustedBP.push(d);
  }

})

// shuffle adjusted array
function shuffle(array) {
  var i = 0
    , j = 0
    , temp = null

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}

shuffle(adjustedBP);

let blogURL, blogImg, blogTitle;

// append card to bxslider
function appendCard() {

  // markup for individual card
  const bxslider = document.querySelector('.bxslider-inspire');
  
  for (let i=0; i <= 9; i++) {

    blogURL = adjustedBP[i].linkURL;
    blogImg = adjustedBP[i].imgURL;
    blogTitle = adjustedBP[i].postTitle;

    const markup = 
    `<a href="${blogURL}" class="card__link">
      <img src="${blogImg}" class="card__image">
      <div class="banner__copy-container">
        <h2 class="banner__caption-title">${blogTitle}</h2>
      </div>
    </a>`;

    const cardIndex = i;

    // create card container, add the markup  and append to bxslider
    const cardContainer = document.createElement('div');
    cardContainer.className = 'card';
    cardContainer.id = cardIndex;
    cardContainer.innerHTML = markup;
    bxslider.appendChild(cardContainer);
  }  
}

appendCard();

prerequire.add(['jquery'], function($) {
  $(function() {
    let $slider;

    // bxslider config settings
    function buildSliderConfig() {
      let windowWidth = $(window).width();
      let margin;

      // card right margin based on viewport
      if (windowWidth <= 675) {
        margin = 0.0625 * windowWidth;
      } else if (windowWidth < 1920) {
        margin = 0.04 * windowWidth;
      } else if (windowWidth >= 1920) {
        margin = 82.5;
      }

      return {
        pager: (windowWidth <= 675) ? true : false,
        slideWidth: (windowWidth <= 675) ? 316.4 : 585,
        slideMargin: margin,
        maxSlides:(windowWidth <= 675) ? 2 : 3,
        minSlides: (windowWidth <= 675) ? 2 : 3,
        moveSlides:(windowWidth <= 675) ? 2 : 3,
        nextText: '<img src="https://static.indigoimages.ca/2019/next.png">',
        prevText: '<img src="https://static.indigoimages.ca/2019/previous.png">'
      }; 
    }

    // initialize and reload slider behaviour
    function configureSlider() {
      const config = buildSliderConfig();
      
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
})