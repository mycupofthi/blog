# Naming conventions for banners & embed blocks

## **Banner widget** classes with caption fields

### Story Header

- **.cat-header** - main header for each story ([example](https://preview.indigo.ca/Admin/ContentDetails.aspx?id=55960&language=4105)):

  - title - story title
  - text - story intro
  - cta 1 - .date - format MMM.DD.YYYY
  - cta 2 - .category - ie. books, gifting, food + entertaining, wellness, style + design, family
  - cta 3 - .share - share btn

### Full bleed - 1920px

- **.cat-hero** - general
- **.cat-quote** - quotes ([example](https://preview.indigo.ca/Admin/ContentDetails.aspx?id=55963&language=4105))
  - cta 1 - .cat-quote\_\_byline - quoted by line
  - **.cat-quote-top** - moves down the quote copy container 155px

### Wrapped - 1440px

- **.cat-main** - general
- **.cat-portait** - below quote banner - left img and right captions (inspired/books/annieleibovitz for reference) ([example - below Whoopi quote banner](https://preview.indigo.ca/en-ca/inspired/books/))
- **.cat-video** - inserting youtube videos (inspired/books/annieleibovitz for reference) ([example - Annie Leibovitz video](https://preview.indigo.ca/en-ca/inspired/books/))
- **mobile-full-bleed** - adjusts a banner to full bleed on mobile

#### Mixed

- **.cat-hero-tablet** - wrapped at 1440px at desktop, full-bleed for tablet, wrapped at mobile ([example - ingredients section](https://preview.indigo.ca/en-ca/inspired/food-entertaining/))

### Others -

- **.main-feat** - main features on LP and category pages
- **.small-feat** - small features on LP
- **.cat-no-bottom** - removes bottom margin (can be added in addition to any of the top classes)
- **.cat-bg** - full bleed bg - add class with _.cat-main_ or _.cat-hero_ (inspired/family/nursery-decor for reference) - (eg. 55961) ([example](https://preview.indigo.ca/en-ca/inspired/family/nursery-decor))
- **.cat-line-break** - if you're manually writing out the HTML, including a text you want in a new line in a span with this class will add a line break

## **Caption fields** in extra tools

- **.cat-article** - article copy:

  - title - smaller title with underline (usually in second position) ([example - Kimye banner 'inspiration comes when you least expect it'](https://preview.indigo.ca/en-ca/inspired/books/))
  - text - copy
  - cta 1 options:
    - .banner\_\_caption-header - large title below img asset ([example](https://preview.indigo.ca/en-ca/inspired/family/nursery-decor))
    - .banner\_\_caption-caption - img asset caption (like a figcaption) ([example](https://preview.indigo.ca/Admin/ContentDetails.aspx?id=55956&language=4105))

- **.cat-quote-l** - left copy ([example - quote section](https://preview.indigo.ca/en-ca/inspired/family/nursery-decor))
- **.cat-quote\_\_caps** - uppercase ([example - Whoopi quote](https://preview.indigo.ca/en-ca/inspired/books/))
- **.cat-centered** - centers text
- **.cat-overlap** - absolutely positioned over image within 1440px wrapper (default - copy on left)
  - add .cat-overlap-r - copy on right side
    -- **.cat-quote-80** - 80vw

## Embed html blocks

Recipe list & instructions, Q&A, videos, copy with hyperlinks

- **.banner\_\_caption-link** - hyperlinks
- **.cat-no-top** - no top margin - add to caption class
- **.paragraph** - add class to banner\_\_caption-text to create spaces in paragraphs
- **.text--initial** - add class to make first letters of word initialized in a title (instead of text-transform: uppercase)
- **.default-text--transform** - add class to return to default text transform (sentence casing)

- **.cat-list** - recipes, instructions, Q&A

  - add .cat-list-center - center text in 1020px wrapper ([example - Q&A section](https://preview.indigo.ca/en-ca/inspired/food-entertaining))
  - add .cat-list-l - left copy in 1020px wrapper ([example - ingredients section](https://preview.indigo.ca/en-ca/inspired/food-entertaining))
  - add .cat-list-r - right copy in 1060px wrapper ([example - instructions section](https://preview.indigo.ca/en-ca/inspired/food-entertaining))
  - add .cat-qa - smaller top & bottom margins for text in mobile ([example - Q&A section](https://preview.indigo.ca/en-ca/inspired/food-entertaining))

- **.cat-video** - content block ([example - Annie Leibovitz video](https://preview.indigo.ca/Admin/ContentDetails.aspx?id=55987&language=4105))

#### Template:

```
<section class="cat__embed">
  <div class="banner cat-hero/cat-main/etc.">
    <div class="banner__container">
      <div class="banner__image">
        <picture>
          <source media="(min-width: 675px)" srcset="">
          <source srcset="">
          <img data-type="banner" class="banner__image-picture" src="" alt="">
        </picture>
      </div>
    </div>
    <div class="banner__copy-container + added classes">
      <h2 class="banner__caption-title"></h2>
        <p class="banner__caption-text"></p>
    </div>
  </div>
</section>
```

Template for numbered lists

```
<section class="cat__embed cat-main list">
  <h2 class="list__number">[Number goes here]</h2>
  <div class="banner list__feat-l cat-main">
    <div class="banner__container">
      <div class="banner__image">
        <picture>
          <source media="(min-width: 675px)" srcset=""/>
          <source srcset="" />
          <img data-type="banner" class="banner__image-picture" src="" alt="" />
        </picture>
      </div>
    </div>
    <div class="banner__copy-container cat-article">
      <h2 class="banner__caption-title">
      </h2>
      <h3 class="banner__caption--name"></h3>
      <p class="banner__caption-text">
      </p>
    </div>
  </div>
</section>
```
