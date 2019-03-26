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

### Wrapped - 1440px

- **.cat-main** - general
- **.cat-portait** - below quote banner - left img and right captions (inspired/books/annieleibovitz for reference) ([example - below Whoopi quote banner](https://preview.indigo.ca/en-ca/inspired/books/))
- **.cat-video** - inserting youtube videos (inspired/books/annieleibovitz for reference) ([example - Annie Leibovitz video](https://preview.indigo.ca/en-ca/inspired/books/))

### Others - can be added in addition to any of the top classes
- **.cat-no-bottom** - removes bottom margin 
- **.cat-bg** - full bleed bg - add class with *.cat-main* or *.cat-hero* (inspired/family/nursery-decor for reference) - (eg. 55961) ([example](https://preview.indigo.ca/en-ca/inspired/family/nursery-decor))

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

## Embed html blocks

Recipe list & instructions, Q&A, videos, copy with hyperlinks

- **.banner\_\_caption-link** - hyperlinks
- **.cat-no-top** - no top margin - add to caption class
- **.indented** - add class to banner__caption-text to indent paragraphs

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
    <div class="banner__container" style="max-width:1920px">
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
