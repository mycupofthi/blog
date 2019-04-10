# Indigo Online Blog Info and Instructions

## Updating and installing this project

Start by making sure you have the following downloaded to your computer: npm and git

1. Start by Clicking the Fork button on top of this project, this will generate your own version on github. Navigate to your fork and copy the fork link.
2. In your terminal (for windows we recommend [cmder](https://cmder.net/)) type `cd` and the folder that you have for this project that you would like to place the code in (it should look something like https://github.com/YOUR_GITHUB_USERNAME/blog.git).
3. In your terminal type `git clone [url for repository] .` (the period is important so it puts the folders in the directory you're in, otherwise it'll just create a new folder inside your folder).
   - to make sure you're situated on the right repository type in `git remote -v`, it'll give you a list of the origin(should be your forked repo) and the upstream which should be the main indigo-online-production-projects/blog.git
4. Once you've downloaded the project to your computer type `npm i` to install the node package modules, these are necessary to compile and process the code. You may notice some warnings, it's safe to ignore them right now and it shouldn't prevent you from going forward.
5. This project uses SASS for the CSS. To compile this we use gulp. In your terminal (still within this project folder) simply type `gulp` and it'll begin watching your files. Every time you hit save it will compile your code.
6. To pull compiled code for using on the CMS simply navigate to the folder public>styles and copy the content in style.css into the CMS (╯✧∇✧)╯

**For more info on SCSS/Sass check out [Sass Basics](https://sass-lang.com/guide) - particularly, the guide on nesting**

### Making Changes to Project

(☞ ﾟ ∇ ﾟ)☞ Woohoo you've made some changes! Now you want to push them to github so that anyone else who picks up this project is working with the same base material you are.

In your terminal do the following

1. Type `git status`. This will list all of the files that you've changed. Take a look at the list and pat yourself on a job well done. These are the files that will soon be staged for github.
2. Type `git add -A` this will add all of the files to the staging area to push to git hub.
3. Type `git commit -m "your message here"` here is where you type in a message to inform everyone on what these changes were, keep it brief, if you want to add more info it can be done later.
4. Now we can fire out your work to github! Type in `git push origin master`. This will load all of your code to your fork.

In your browser now navigate to your github fork.

## Page Creation

#### Blog Posts

Use the blank responsive template and add the following Content Blocks to the top of your blog page: 55926 and 55968.

Add in hero banner (should contain the same classes as all other '00' banners in the inspired blog).

Add in any related banners or html blocks

Add in content block ID for Share at bottom of blog post 56049

If you're working on a blog post that requires a carousel of posts, add the following Content Block with an ID of 56041

Add in footer Content Block at bottom of page with ID of 55937

#### Category Landing Page

Do the same as above and add in the following code to remove the arrow in an html element and add some extra styles:

```
<style>
    .inspired-header__arrow {
        display:none;
    }
    @media (max-width: 675px) {
        .inspired-header__container {
            top: 12vw
        }
        .cat-header .banner__copy-container .category {
            font-size: 5.47vw;
            width: 100%;
        }
    }
</style>
```

** Make sure to select styles only so the banner doesn't create extra space **

### General Assets

Banners can be found in the CMS under `Content>Banners>Inspired Blog`. Create a new folder for new blog post page and add in your banners (the easiest method to do so is to copy an existing folder and paste it into the Inspired Blog directory).

Category landing page assets are located in `Content>Banners>Inspired Blog>2019 - Inspired Landing Page Banners>Category -` just copy and paste any existing banners that match the desired layout.

### Phase 2

- [ ] Make accessible hamburger menu
- [x] Make carousel
- [x] Add pinterest share link
- [ ] Add pseudo elements into Types of Mom page
